document.getElementById("register-form").addEventListener("submit", async (e)=>{
    e.preventDefault();

    const res = await fetch("http://localhost:3000/signup", {
        method: "Post",
        headers:{
            "Content_Type" : "applicacion/json"
        },
        body: JSON.stringify({
            nombre: e.target.nombre.value, 
            apellido: e.target.apellido.value, 
            dni: e.target.dni.value, 
            f_nac:e.target.fecha_de_nacimiento.value, 
            correo: e.target.correo.value, 
            telefono: e.target.telefono.value, 
            contrasena: e.target.contraseña.value
        })
    })
       // {"nombre":"","apellido":"","dni":"","f_nac":"","correo":"","telefono":"","contraseña":""}
    
    
})
console.log("fin")
