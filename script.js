// Cambia el import para usar la CDN de Supabase en el navegador
// <script type="module">
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0";
const supabaseUrl = 'https://gmqeqstbgikpxgpaxnif.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcWVxc3RiZ2lrcHhncGF4bmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NjAzMDQsImV4cCI6MjA2NTIzNjMwNH0.7PwRzmlB3sMopump2NVK_dkmILbuun_KwJ_YIm4cpLE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function datos() {
  let { data: usuario, error } = await supabase
    .from('usuario')
    .select('*');
  if (error) {
    console.error('Error al consultar:', error);
  } else {
    console.log('Datos de usuario:', usuario);
  }
}

async function insertarDatos(datos) {
  const { data, error } = await supabase
    .from('usuario')
    .insert(datos)
    .select();
  if (error) {
    console.error('Error al insertar:', error);
  } else {
    console.log('Datos insertados:', data);
  }
}

// Función para pedir datos por prompt y luego insertarlos
async function insertarDatosPorPrompt() {
  const Nombre_completo = prompt('Nombre completo:');
  const DNI = parseInt(prompt('DNI:'), 10);
  const Fecha_de_nacimiento = prompt('Fecha de nacimiento (YYYY-MM-DD):');
  const Nacionalidad = prompt('Nacionalidad:');
  const Correo_electronico = prompt('Correo electrónico:');
  const Numero_de_celular = parseInt(prompt('Número de celular:'), 10);
  const Contraseña = prompt('Contraseña:');

  const datos = [{
    Nombre_completo,
    DNI,
    Fecha_de_nacimiento,
    Nacionalidad,
    Correo_electronico,
    Numero_de_celular,
    Contraseña
  }];
  await insertarDatos(datos);
}

window.insertarDatosPorPrompt = insertarDatosPorPrompt;

// Ejemplo de uso en navegador:
// insertarDatos([{ ... }]);
// datos();

