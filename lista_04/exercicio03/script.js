/* 
Construa uma página web para exibir no corpo da página (document.write) um número
aleatório entre 1 e N, onde N deverá ser um número informado pelo usuário.

Utilize prompt() e write()
*/

// Solicita ao usuário um número N
var userInput = prompt("Digite um número N para gerar um número aleatório entre 1 e N:");

// Converte a entrada do usuário para um número inteiro
var n = parseInt(userInput);

// Verifica se o número N é um número válido (maior ou igual a 1)
if (n >= 1) {
    // Gere um número aleatório entre 1 e N
    var randomNumber = Math.floor(Math.random() * n) + 1;

    // Exibe o número aleatório no corpo da página
    document.write("Seu número aleatório entre 1 e " + n + " é: " + randomNumber);
} else {
    // Se o usuário inserir um número inválido
    document.write("Desculpe, você digitou um número inválido. Por favor, insira um número maior ou igual a 1.");
}
