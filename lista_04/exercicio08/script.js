/*
Construa uma página web capaz de solicitar um texto e exibir no corpo do documento todas
as palavras iniciadas com a letra ‘a’, seguidas das palavras iniciadas com a letra ‘b’, e assim
sucessivamente. Veja o exemplo abaixo:

Utilize prompt() e write()
*/

// Solicita um texto ao usuário usando prompt().
var texto = prompt("Digite um texto qualquer:");

// Divide o texto em palavras usando espaços como delimitador.
var palavras = texto.split(" ");

// Cria um objeto para organizar as palavras por letra inicial.
var palavrasPorLetra = {};

// Organiza as palavras no objeto por letra inicial.
for (var i = 0; i < palavras.length; i++) {
    var primeiraLetra = palavras[i].charAt(0).toLowerCase();
    if (!palavrasPorLetra[primeiraLetra]) {
        palavrasPorLetra[primeiraLetra] = [];
    }
    palavrasPorLetra[primeiraLetra].push(palavras[i]);
}

// Monta a mensagem a ser exibida.
var mensagem = "";
for (var letra in palavrasPorLetra) {
    mensagem += letra.toUpperCase() + ": " + palavrasPorLetra[letra].join(" ") + "<br>";
}

// Exibe a mensagem no corpo do documento usando write().
document.write("<p>" + mensagem + "</p>");