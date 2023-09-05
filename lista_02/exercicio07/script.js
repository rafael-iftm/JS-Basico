/* 
Construa uma página web capaz de solicitar um texto e uma letra e informar no corpo do
documento apenas as palavras iniciadas com a letra informada (deve haver um espaço entre
as palavras).

Utilize prompt() e write()
*/

// Solicita um texto ao usuário usando prompt().
var texto = prompt("Digite um texto qualquer:");

// Solicita uma letra ao usuário usando prompt().
var letra = prompt("Digite uma letra para filtrar as palavras:");

// Divide o texto em palavras usando espaços como delimitador.
var palavras = texto.split(" ");

// Filtra as palavras que começam com a letra informada.
var palavrasFiltradas = palavras.filter(function(palavra) {
    return palavra.charAt(0).toLowerCase() === letra.toLowerCase();
});

// Monta a mensagem a ser exibida.
var mensagem = "Palavras iniciadas com a letra '" + letra + "': " + palavrasFiltradas.join(" ");

// Exibe a mensagem no corpo do documento usando write().
document.write("<p>" + mensagem + "</p>");