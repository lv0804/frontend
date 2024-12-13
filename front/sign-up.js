document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const isPassword = passwordField.type === 'password';

    passwordField.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? 'скрыть' : 'показать'; // Меняем иконку
});
const buttons = document.querySelectorAll('.role-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс 'active' у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));

        // Добавляем класс 'active' к нажатой кнопке
        button.classList.add('active');
    });
});