const eye = document.getElementById('eye');
const eyeClosed = document.getElementById('eye-closed');
const fieldPassword = document.getElementById('field-password');
const fieldEmail = document.getElementById('field-email');

function ChangePasswordVisibility() {

    console.log(eye.style.display);
    if (eye.style.display == 'none' | eye.style.display == '') {
        eye.style.display = 'block';
        eyeClosed.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeClosed.style.display = 'block';
        fieldPassword.type = 'password';
    }
}

function ShowPassword() {

    eye.style.display = 'block';
    eyeClosed.style.display = 'none';
    fieldPassword.type = 'text';
}

function HidePassword() {

    eye.style.display = 'none';
    eyeClosed.style.display = 'block';
    fieldPassword.type = 'password';
}

document.getElementById("btn-login").addEventListener('click', function (e) {
    e.preventDefault();
    alert("Logado com sucesso!");
})