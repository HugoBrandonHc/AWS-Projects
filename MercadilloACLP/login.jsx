import { Auth } from 'aws-amplify';

// Manejo del inicio de sesión
async function signIn() {
  try {
    const user = await Auth.signIn(email, password);
    console.log('Inicio de sesión exitoso:', user);
    // Redireccionar o mostrar un mensaje
  } catch (error) {
    console.log('Error de inicio de sesión:', error);
  }
}

// Llama a signIn cuando el formulario se envíe
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signIn(email, password);
});
