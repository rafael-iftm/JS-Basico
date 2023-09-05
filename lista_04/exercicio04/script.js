/* 
Construa uma página web para exibir no corpo da página (document.write) um número
aleatório entre N e M, onde N e M deverão ser informados pelo usuário.

Utilize prompt() e write()
 */

// Solicita ao usuário os números N e M
var userInputN = prompt("Digite o número N:");
var userInputM = prompt("Digite o número M:");

// Converte as entradas do usuário para números inteiros
var n = parseInt(userInputN);
var m = parseInt(userInputM);

// Verifica se os números N e M são válidos (N deve ser menor que M)
if (!isNaN(n) && !isNaN(m) && n < m) {
    // Gere um número aleatório entre N e M
    var randomNumber = Math.floor(Math.random() * (m - n + 1)) + n;

    // Exibe o número aleatório no corpo da página
    document.write("Seu número aleatório entre " + n + " e " + m + " é: " + randomNumber);
} else {
    // Se o usuário inserir números inválidos
    document.write("Desculpe, você digitou números inválidos. Por favor, insira um número N menor que M.");
}
