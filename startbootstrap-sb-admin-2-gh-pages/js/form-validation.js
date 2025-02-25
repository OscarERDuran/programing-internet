document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registerForm');
    form.addEventListener('submit', function (event) {
        var password = document.getElementById('exampleInputPassword');
        var confirmPassword = document.getElementById('exampleRepeatPassword');

        if (form.checkValidity() === false || password.value !== confirmPassword.value) {
            event.preventDefault();
            event.stopPropagation();

            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
            } else {
                confirmPassword.setCustomValidity('');
            }
        }

        form.classList.add('was-validated');
    }, false);
}, false);