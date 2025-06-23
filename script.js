// Importa la función createClient desde el CDN de Supabase para poder usar la base de datos desde el navegador
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// URL y clave secreta de tu proyecto Supabase
const supabaseUrl = 'https://gmqeqstbgikpxgpaxnif.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcWVxc3RiZ2lrcHhncGF4bmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NjAzMDQsImV4cCI6MjA2NTIzNjMwNH0.7PwRzmlB3sMopump2NVK_dkmILbuun_KwJ_YIm4cpLE";

// Crea el cliente de Supabase para interactuar con la base de datos
const supabase = createClient(supabaseUrl, supabaseKey);

// Función asíncrona para insertar un usuario en la tabla 'usuario'
async function insertarUsuario(usuario) {
    // Intenta insertar el usuario recibido como parámetro
    const { data, error } = await supabase
      .from('usuario') // Indica la tabla 'usuario'
      .insert([usuario]); // Inserta el objeto usuario

    // Si hay error, lo muestra en consola y alerta
    if (error) {
        console.error("Error al insertar:", error);
        alert("Error al insertar: " + JSON.stringify(error));
    } else {
        // Si se inserta correctamente, muestra los datos insertados
        console.log("Usuario insertado:", data);
        alert("Usuario insertado: " );
        window.location.href = "login/login.html";
    }
}

// Agrega un listener al formulario con id 'usuarioForm' para manejar el envío
// Cuando el usuario envía el formulario, ejecuta esta función
document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se recargue

    // Toma los valores de cada campo del formulario y los pone en un objeto usuario
    const usuario = {
        nombre_completo: document.getElementById('nombre_completo').value,
        dni: document.getElementById('dni').value,
        fecha_de_nacimiento: document.getElementById('fecha_de_nacimiento').value, // Debe estar en formato YYYY-MM-DD
        nacionalidad: document.getElementById('nacionalidad').value,
        correo_electronico: document.getElementById('correo_electronico').value,
        numero_de_celular: document.getElementById('numero_de_celular').value,
        contraseña: document.getElementById('contraseña').value
    };

    // Llama a la función para insertar el usuario en la base de datos
    insertarUsuario(usuario);
});

