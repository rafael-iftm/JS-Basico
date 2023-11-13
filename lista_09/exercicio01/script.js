function submitForm() {
    // Obtém os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verifica se todos os campos estão preenchidos
    if (username && password && confirmPassword) {
        // Verifica se as senhas coincidem
        if (password === confirmPassword) {
            // Verifica se há usuários cadastrados no LocalStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Cria um objeto com os dados do novo usuário
            const newUser = { username, password };

            // Adiciona o novo usuário ao vetor de usuários
            users.push(newUser);

            // Armazena o vetor atualizado no LocalStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Exibe pop-up de sucesso
            alert('Cadastro realizado com sucesso!');

            // Redireciona para a página desejada
            window.location.href = '../../lista_08/exercicio01/index.html';
        } else {
            // Exibe mensagem de erro se as senhas não coincidem
            document.getElementById('result').innerHTML = '<p>As senhas não coincidem.</p>';
        }
    } else {
        // Exibe mensagem de erro se algum campo não foi preenchido
        document.getElementById('result').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
    }
}
