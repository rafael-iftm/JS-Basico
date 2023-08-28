/*
Construa uma página web capaz de solicitar um texto e informar através de uma mensagem
de alerta se o texto informado é um palíndromo.

Utilize somente prompt() e write()
*/

// Solicita um texto ao usuário usando prompt().
var texto = prompt("Digite um texto para verificar se é um palíndromo:");

// Remove espaços em branco e converte o texto para letras minúsculas.
var textoFormatado = texto.replace(/\s+/g, "").toLowerCase();

// Inverte o texto formatado.
var textoInvertido = textoFormatado.split("").reverse().join("");

// Verifica se o texto formatado é igual ao texto invertido.
var ehPalindromo = textoFormatado === textoInvertido;

// Monta a mensagem a ser exibida.
var mensagem = ehPalindromo ? "O texto é um palíndromo!" : "O texto não é um palíndromo.";

// Exibe a mensagem usando alert().
alert(mensagem);
