document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario-registro");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre_completo").value;
    const dni = document.getElementById("dni").value;
    const fechaNacimiento = document.querySelector("input[type='date']").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const correo = document.querySelector("input[type='email']").value;
    const celular = document.getElementById("celular").value;
    const contraseña = document.getElementById("password1").value;
    const repetirContraseña = document.getElementById("password2").value;

    if (contraseña !== repetirContraseña) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    fetch("https://honey-money-back-end-production.up.railway.app/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre_completo: nombre,
        dni: dni,
        fecha_nacimiento: fechaNacimiento,
        nacionalidad: nacionalidad,
        correo: correo,
        celular: celular,
        contraseña: contraseña
      })
    })
    .then(res => {
      if (!res.ok) throw new Error("Error al registrarse");
      return res.json();
    })
    .then(data => {
      alert("Cuenta creada correctamente.");
      window.location.href = "../login/login.html";
    })
    .catch(err => {
      console.error(err);
      alert("No se pudo crear la cuenta. Verifica los datos.");
    });
  });
});