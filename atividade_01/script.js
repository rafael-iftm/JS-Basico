/*
    Construa uma página web capaz de solicitar ao usuário uma frase, em seguida, a partir da frase lida, exibir:
    - o total de frutas contidas no texto e as frutas encontradas logo abaixo
    - o total de verdutas contidas no texto e as verduras encontradas logo abaixo

    Utilize somente prompt() e write()
*/


const frutas = [
    "maçã", "banana", "laranja", "uva", "morango",
    "pera", "manga", "moranga", "mexerica", "kiwi", "abacate", "pêssego",
    "abacaxi", "mamão", "melancia", "amora", "framboesa",
    "cereja", "limão", "caju", "maracujá", "ameixa"
];

const verduras = [
    "alho", "alface", "cenoura", "batata", "brócolis", "abobrinha", "espinafre", "cebola",
    "couve", "rúcula", "chicória", "almeirão", "repolho",
    "couve-flor", "beterraba", "nabo", "acelga", "agrião",
    "salsinha", "coentro", "hortelã", "radicchio"
];

const frase = prompt("Digite uma frase:");
const fraseSemPontuacao = frase.replace(/[^\w\s]/gi, '');
const palavras = fraseSemPontuacao.split(" ");
console.log(palavras);

let totalFrutas = 0;
let frutasEncontradas = [];
let totalVerduras = 0;
let verdurasEncontradas = [];

for (const palavra of palavras) {
    const palavraLowerCase = palavra.toLowerCase();

    if (frutas.includes(palavraLowerCase)) {
        totalFrutas++;
        frutasEncontradas.push(palavra);
    }
    if (verduras.includes(palavraLowerCase)) {
        totalVerduras++;
        verdurasEncontradas.push(palavra);
    }
}

// Contagem de palavras analisadas
const totalPalavrasAnalisadas = palavras.length;

// Dividindo a frase em frases individuais (assumindo separação por ., ! ou ?)
const frases = frase.split(/[.!?]/).filter(frase => frase.trim() !== '');

// Contagem do número total de frases
const totalFrases = frases.length;

document.write("<p>Banco de frutas: <br>" + frutas.sort().join(", ") + "</p>");
document.write("<p>Banco de verduras: <br>" + verduras.sort().join(", ") + "</p>");
document.write("_________________________________________________________________________________________________________________________________________________________________________");

document.write("<h3>Total de frutas: " + totalFrutas + "</h3>");
document.write("<p>Frutas encontradas: " + frutasEncontradas.join(", ") + "</p>");
document.write("<h3>Total de verduras: " + totalVerduras + "</h3>");
document.write("<p>Verduras encontradas: " + verdurasEncontradas.join(", ") + "</p>");

document.write("_________________________________________________________________________________________________________________________________________________________________________");

document.write("<h2>Estatísticas</h2>");
document.write("<p><b>Texto Original:</b> " + frase + "</p>");
document.write("<p><b>Total (palavras analisadas):</b> " + totalPalavrasAnalisadas + "</p>");
document.write("<p><b>Frases (lista)</b></p>");
document.write("<ul>");
for (const frase of frases) {
    document.write("<li>" + frase.trim() + "</li>");
}
document.write("</ul>");
document.write("<p><b>Total de frases:</b> " + totalFrases + "</p>");
