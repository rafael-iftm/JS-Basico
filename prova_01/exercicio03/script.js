/* 
Construa uma página web para solicitar do usuário um TEXTO e uma PALAVRA qualquer. A página deverá 
exibir  todas  as  PALAVRAS  contidas  no  TEXTO,  independentemente  se  elas  estiverem  com  letras 
maiúsculas/minúsculas, além do número de ocorrências dela no texto. Para melhor compreensão, veja o 
exemplo abaixo: 
 
Informe um texto qualquer (a partir de um prompt): O amor é um sentimento sublime. AMOR é entrega 
desde que o Amor seja verdadeiro. 
Informe a palavra a ser encontrada (a partir de um prompt): amor 
Palavras encontradas (use document.write): amor, AMOR, Amor 
Número de ocorrências (use document.write): 3

Utilize prompt() e write()
*/

var texto = prompt("Digite um texto:");

// Solicitar a palavra a ser encontrada ao usuário
var palavra = prompt("Digite a palavra a ser encontrada:");

// Converter o texto para letras minúsculas para comparação
var textoLowerCase = texto.toLowerCase();

// Dividir o texto em palavras usando espaço como delimitador
var palavrasNoTexto = texto.split(" ");

// Inicializar um contador para o número de ocorrências
var contador = 0;

// Inicializar uma lista para armazenar as palavras encontradas
var palavrasEncontradas = [];

// Iterar pelas palavras no texto
for (var i = 0; i < palavrasNoTexto.length; i++) {
    // Comparar cada palavra em letras minúsculas com a palavra de busca
    if (palavrasNoTexto[i].toLowerCase() === palavra.toLowerCase()) {
        contador++;
        palavrasEncontradas.push(palavrasNoTexto[i]);
    }
}

// Exibir as palavras encontradas e o número de ocorrências
document.write("Informe um texto qualquer (a partir de um prompt): " + texto + "<br>");
document.write("Informe a palavra a ser encontrada (a partir de um prompt): " + palavra + "<br>");
document.write("Palavras encontradas (use document.write): " + palavrasEncontradas.join(", ") + "<br>");
document.write("Número de ocorrências (use document.write): " + contador);