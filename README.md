Diseño en Figma: https: //www.figma.com/design/cH0qQHYQ0PU4QGilz9OmZ6/Inicio?m=auto&t=IoEj5S7yIOgBiNjq-6 

# Documentación del Frontend

## Flujo de registro y login

1. **Registro:**
   - El usuario completa el formulario de registro en `sigin.html`.
   - Todos los campos son obligatorios.
   - El correo y la nacionalidad se envían en minúsculas.
   - El frontend valida que la contraseña tenga al menos 6 caracteres y que ambas contraseñas coincidan.
   - Si el registro es exitoso, se muestra un mensaje y se redirige al login.

2. **Login:**
   - El usuario inicia sesión en `login.html` con correo/dni y contraseña.
   - El correo se envía en minúsculas.
   - Si el login es exitoso, el nombre recibido en la respuesta del backend se guarda en `localStorage` bajo la clave `nombre`.
   - El usuario es redirigido al home.

3. **Home:**
   - En `home.html`, el archivo `home.js` lee el nombre desde `localStorage` y lo muestra en el saludo.
   - Si no hay nombre en `localStorage`, el saludo aparece vacío.

## Validaciones y UX

- Todos los campos son obligatorios en registro y login.
- El frontend muestra mensajes de error o éxito en un div visible, no con alertas.
- Los campos de contraseña nunca aplican mayúscula automática ni autocorrección.
- Solo los campos de nombre y apellido aplican capitalización visual.
- El botón solo funciona si todos los campos están completos y válidos.

## Manejo de errores

- Si el backend responde con error (por ejemplo, usuario existente, contraseña corta, etc.), el mensaje se muestra en pantalla.
- Si la contraseña es menor a 6 caracteres, se muestra un mensaje antes de enviar la petición.
- Si el backend no devuelve el nombre tras el login, el home no mostrará el saludo personalizado.

## Recomendaciones de integración

- El backend debe devolver el campo `nombre` en la respuesta del login para que el frontend lo muestre correctamente.
- El frontend debe limpiar el `localStorage` al cerrar sesión (si implementas logout).
- Asegúrate de que los correos se manejen siempre en minúsculas para evitar problemas de coincidencia.

## Notas adicionales

- El frontend está preparado para integrarse con el backend en `http://localhost:3000/usuarios/`.
- Puedes personalizar los mensajes y estilos en los archivos de JS y CSS según tus necesidades.

## Endpoint de producción

El backend está desplegado en:

https://honey-money-back-end-production.up.railway.app/usuarios/
