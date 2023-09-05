/* 
Construa uma página web para exibir no corpo da página (document.write) um número
aleatório entre 10 e 50.

Utilize prompt() e write()
 */

// Solicita ao usuário um número entre 10 e 50
var userInput = prompt("Digite um número entre 10 e 50:");

// Converte a entrada do usuário para um número inteiro
var userNumber = parseInt(userInput);

// Verifica se o número está dentro do intervalo válido (10 a 50)
if (userNumber >= 10 && userNumber <= 50) {
    // Gera um número aleatório entre 10 e 50
    var randomNumber = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

    // Exibe o número aleatório no corpo da página
    document.write("Seu número aleatório entre 10 e 50 é: " + randomNumber);
} else {
    // Se o usuário inserir um número fora do intervalo válido
    document.write("Desculpe, você digitou um número fora do intervalo válido (10 a 50).");
}
