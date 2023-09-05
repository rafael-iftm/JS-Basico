/* 
Construa uma página web para exibir no corpo da página (document.write) um número
aleatório entre 1 e 10.

Utilize prompt() e write()
 */

// Solicita ao usuário um número entre 1 e 10
var userInput = prompt("Digite um número entre 1 e 10:");

// Converte a entrada do usuário para um número inteiro
var userNumber = parseInt(userInput);

// Verifica se o número está dentro do intervalo válido (1 a 10)
if (userNumber >= 1 && userNumber <= 10) {
    // Gere um número aleatório entre 1 e 10
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    // Exibe o número aleatório no console
    console.log("Seu número aleatório entre 1 e 10 é: " + randomNumber);
} else {
    // Se o usuário inserir um número fora do intervalo válido
    console.log("Desculpe, você digitou um número fora do intervalo válido (1 a 10).");
}
