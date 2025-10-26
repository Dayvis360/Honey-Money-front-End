function mostrarMensaje(texto, tipo) {
    const div = document.getElementById('mensaje');
    div.textContent = texto;
    div.className = tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error';
    div.style.display = 'block';
}

document.getElementById("register-form").addEventListener("submit", (e)=>{
     console.log(e);
});
console.log("FIN")

