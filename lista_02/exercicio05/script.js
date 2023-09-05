/*
Construa uma página web capaz de solicitar do usuário um texto qualquer e, em seguida,
informar através de uma mensagem de alerta a quantidade de palavras contidas no texto.

Utilize prompt() e write()
*/

// Solicita um texto ao usuário usando prompt().
var texto = prompt("Digite um texto qualquer:");

// Divide o texto em palavras usando espaços como delimitador.
var palavras = texto.split(" ");

// Calcula a quantidade de palavras.
var quantidadePalavras = palavras.length;

// Monta a mensagem a ser exibida.
var mensagem = "Quantidade de palavras no texto: " + quantidadePalavras;

// Exibe a mensagem usando alert().
alert(mensagem);