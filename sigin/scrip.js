function mostrarMensaje(texto, tipo) {
    const div = document.getElementById('mensaje');
    div.textContent = texto;
    div.className = tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error';
    div.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.boton-registro');
    boton.addEventListener('click', async function() {
        // Limpiar mensaje anterior
        mostrarMensaje('', '');
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const nacionalidad = document.getElementById('nacionalidad').value.toLowerCase();
        const gmail = document.querySelector('input[type="email"]').value.trim().toLowerCase();
        const telefono = document.getElementById('telefono').value.trim();
        const contrasena = document.getElementById('password1').value;
        const repetirContrasena = document.getElementById('password2').value;
        const fechaNacimiento = document.querySelector('input[type="date"]').value;
        if (!nombre || !apellido || !dni || !nacionalidad || !gmail || !telefono || !contrasena || !repetirContrasena || !fechaNacimiento) {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
            return;
        }
        if (contrasena !== repetirContrasena) {
            mostrarMensaje('Las contraseñas no coinciden', 'error');
            return;
        }
        const body = {
            nombre,
            apellido,
            dni,
            nacionalidad,
            gmail,
            telefono,
            contraseña: contrasena,
            fecha_de_nacimiento: fechaNacimiento
        };
        try {
            const response = await fetch('https://honey-money-back-end-production.up.railway.app/usuarios/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            if (response.ok) {
                mostrarMensaje('Registro exitoso. Ahora puedes iniciar sesión.', 'exito');
                setTimeout(() => { window.location.href = '../login/login.html'; }, 1200);
            } else {
                mostrarMensaje(data.error || 'Error al registrarse', 'error');
            }
        } catch (err) {
            mostrarMensaje('Error de conexión con el servidor', 'error');
        }
    });
});
