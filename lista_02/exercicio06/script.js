/*
Construa uma página web capaz de solicitar um texto e informar no corpo do documento a
concatenação da primeira com a última palavra do texto (deve haver um espaço entre as
palavras).

Utilize prompt() e write()
*/


// Solicita um texto ao usuário usando prompt().
var texto = prompt("Digite um texto qualquer:");

// Divide o texto em palavras usando espaços como delimitador.
var palavras = texto.split(" ");

// Obtém a primeira palavra.
var primeiraPalavra = palavras[0];

// Obtém a última palavra.
var ultimaPalavra = palavras[palavras.length - 1];

// Concatena a primeira e última palavra com um espaço entre elas.
var concatenacao = primeiraPalavra + " " + ultimaPalavra;

// Exibe a concatenação no corpo do documento usando write().
document.write("<p>" + concatenacao + "</p>");