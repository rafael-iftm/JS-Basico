/*
Construa uma página web para gerar e mostrar no corpo do documento uma sugestão de 6
(seis) números da mega sena.

Utilize prompt() e write()
*/


// Gera uma sugestão de 6 números aleatórios para a Mega Sena
function gerarNumerosMegaSena() {
    var numeros = [];
    while (numeros.length < 6) {
        var numeroAleatorio = Math.floor(Math.random() * 60) + 1; // Gera números de 1 a 60
        if (numeros.indexOf(numeroAleatorio) === -1) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros;
}

// Solicita ao usuário se deseja gerar uma sugestão
var desejaGerar = confirm("Deseja gerar uma sugestão de números para a Mega Sena?");

if (desejaGerar) {
    // Gera a sugestão de números
    var sugestao = gerarNumerosMegaSena();

    // Exibe a sugestão no corpo da página
    document.write("<h1>Sugestão de Números para a Mega Sena:</h1>");
    document.write("<p>Números: " + sugestao.join(", ") + "</p>");
} else {
    // Se o usuário optar por não gerar uma sugestão
    document.write("<h1>Obrigado por visitar!</h1>");
}
