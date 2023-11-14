window.submitLogin = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Login realizado com sucesso!');
            window.location.href = '../../lista_08/exercicio01/index.html';
        } else {
            alert('Credenciais incorretas. Tente novamente.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
};
