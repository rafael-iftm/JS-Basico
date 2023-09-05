/*
Construa uma página web capaz de solicitar ao usuário um texto qualquer e, em seguida,
duas palavras (uma de cada vez). Por último, mostre através de uma caixa de diálogo o texto
inicial alterado, substituindo a ocorrência da primeira palavra informada pelo usuário pela
segunda.

Utilize prompt() e write()
*/

// Solicita um texto ao usuário usando prompt().
var texto = prompt("Digite um texto qualquer:");

// Solicita a primeira palavra a ser substituída.
var primeiraPalavra = prompt("Digite a primeira palavra a ser substituída:");

// Solicita a segunda palavra a ser usada na substituição.
var segundaPalavra = prompt("Digite a segunda palavra para a substituição:");

// Realiza a substituição da primeira palavra pela segunda no texto.
var textoAlterado = texto.replace(primeiraPalavra, segundaPalavra);

// Exibe o texto alterado em uma caixa de diálogo usando alert().
alert("Texto original:\n" + texto + "\n\nTexto alterado:\n" + textoAlterado);