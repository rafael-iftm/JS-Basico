function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    const passwordRegex = /^[a-zA-Z0-9+*\/@&-]{4,12}$/;

    if (usernameRegex.test(username) && passwordRegex.test(password) && passwordRegex.test(confirmPassword)) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);

        if (userExists) {
            alert('Usuário já cadastrado. Por favor, faça o login.');
            window.location.href = '../login/index.html';
        } else {
            const newUser = { username, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Cadastro realizado com sucesso! Por favor, faça o login.');
            window.location.href = '../login/index.html';
        }
    } else {
        if (!usernameRegex.test(username)) {
            alert('Nome de usuário inválido. Informe um usuário contendo de 5 a 20 caracteres alfanuméricos.');
        } else if (!passwordRegex.test(password) || !passwordRegex.test(confirmPassword)) {
            alert('Senha inválida. Informe uma senha contendo de 4 a 12 letras, composta por números e/ou um dos seguintes símbolos: + - * / @ &.');
        } else {
            alert('Por favor, preencha os campos corretamente.');
        }
    }
}
