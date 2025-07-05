document.addEventListener("DOMContentLoaded", function () {
  const botonLogin = document.querySelector(".boton-ingresar");

  botonLogin.addEventListener("click", function () {
    const correoODni = document.getElementById("correo_dni").value;
    const contraseña = document.getElementById("password1").value;

    // Validación básica
    if (!correoODni || !contraseña) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Enviar datos al backend con fetch
    fetch("https://honey-money-back-end-production.up.railway.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correoODni: correoODni,
        contraseña: contraseña
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Error en el login");
        return res.json();
      })
      .then(data => {
        console.log("Respuesta del backend:", data);

        // Si el login es exitoso, redirigimos al home
        window.location.href = "../home/home.html";
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Login fallido. Verifica tus datos.");
      });
  });
});