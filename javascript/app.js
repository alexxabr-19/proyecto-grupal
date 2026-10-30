const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Credenciales correctas 
const USER = 'hola';
const PASS = '12345';

// Evento al formulario para manejar el envío
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //Valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Validamos credenciales

    if (username === USER && password === PASS) {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Inicio de sesión exitoso!'
        setTimeout(function () {
            window.location.href = 'eventos.html';
        }, 1000);
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }

    loginForm.reset();
});