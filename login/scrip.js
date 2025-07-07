function togglePassword() {
            const passwordInput = document.getElementById("password");
            const icon = document.querySelector(".toggle-password");
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            icon.textContent = isPassword ? "🙈" : "👁️";
        }

function mostrarMensaje(texto, tipo) {
    const div = document.getElementById('mensaje');
    div.textContent = texto;
    div.className = tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error';
    div.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.boton-ingresar');
    boton.addEventListener('click', async function() {
        // Limpiar mensaje anterior
        mostrarMensaje('', '');
        const correoDni = document.getElementById('correo_dni').value.trim();
        const password = document.getElementById('password1').value;
        if (!correoDni || !password) {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
            return;
        }
        let body = { contraseña: password };
        if (correoDni.includes('@')) {
            body.gmail = correoDni.toLowerCase();
        } else {
            body.dni = correoDni;
        }
        try {
            const response = await fetch('https://honey-money-back-end-production.up.railway.app/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            if (response.ok && data.nombre) {
                localStorage.setItem('nombre', data.nombre);
                mostrarMensaje('¡Inicio de sesión exitoso!', 'exito');
                setTimeout(() => { window.location.href = '../home/home.html'; }, 1200);
            } else {
                mostrarMensaje(data.error || 'Error al iniciar sesión', 'error');
            }
        } catch (err) {
            mostrarMensaje('Error de conexión con el servidor', 'error');
        }
    });
});
