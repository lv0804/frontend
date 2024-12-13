document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const isPassword = passwordField.type === 'password';

    passwordField.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? 'скрыть' : 'показать'; // Меняем иконку
});
