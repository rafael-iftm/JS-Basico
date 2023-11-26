window.submitLogin = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    const passwordRegex = /^[a-zA-Z0-9+*\/@&-]{4,12}$/;

    if (usernameRegex.test(username) && passwordRegex.test(password)) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Login realizado com sucesso!');
            window.location.href = '../jogo/index.html';
        } else {
            alert('Credenciais incorretas. Tente novamente.');
        }
    } else {
        if (!usernameRegex.test(username)) {
            alert('Nome de usuário inválido. Informe um usuário contendo de 5 a 20 caracteres alfanuméricos.');
        } else {
            alert('Senha inválida. Informe uma senha contendo de 4 a 12 letras, composta por números e/ou um dos seguintes símbolos: + - * / @ &.');
        }
    }
};
