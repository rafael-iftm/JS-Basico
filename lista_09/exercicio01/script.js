function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username && password && confirmPassword) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);

        if (userExists) {
            alert('Usuário já cadastrado. Por favor, faça o login.');
            window.location.href = '../../lista_10/exercicio01/index.html';
        } else {
            const newUser = { username, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Cadastro realizado com sucesso! Por favor, faça o login.');
            window.location.href = '../../lista_10/exercicio01/index.html';
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
