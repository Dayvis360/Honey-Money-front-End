document.getElementById("register-form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const res = await fetch("RUTA", {
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
            contraseña: e.target.contraseña.value
        })
    })
        
    
    
})
console.log("fin")
