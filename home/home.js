// Mostrar el nombre del usuario en el home
window.onload = function() {
  const nombre = localStorage.getItem('nombre');
  if (nombre) {
    const nombreUsuario = document.getElementById('nombre-usuario');
    if (nombreUsuario) {
      nombreUsuario.textContent = nombre;
    }
  }
}; 