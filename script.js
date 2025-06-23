import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = 'https://gmqeqstbgikpxgpaxnif.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcWVxc3RiZ2lrcHhncGF4bmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NjAzMDQsImV4cCI6MjA2NTIzNjMwNH0.7PwRzmlB3sMopump2NVK_dkmILbuun_KwJ_YIm4cpLE";
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertarUsuario(usuario) {
    const { data, error } = await supabase
      .from('usuario')
      .insert([usuario]);
    if (error) {
        console.error("Error al insertar:", error);
        alert("Error al insertar: " + JSON.stringify(error));
    } else {
        console.log("Usuario insertado:", data);
        alert("Usuario insertado: " + JSON.stringify(data));
    }
}

document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = {
        nombre_completo: document.getElementById('nombre_completo').value,
        dni: document.getElementById('dni').value,
        fecha_de_nacimiento: document.getElementById('fecha_de_nacimiento').value,
        nacionalidad: document.getElementById('nacionalidad').value,
        correo_electronico: document.getElementById('correo_electronico').value,
        numero_de_celular: document.getElementById('numero_de_celular').value,
        contraseña: document.getElementById('contraseña').value
    };
    insertarUsuario(usuario);
});

