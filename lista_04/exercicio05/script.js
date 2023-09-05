/*
Você irá participar de um evento organizado pela empresa Google e você, juntamente com os
seus colegas, irão de ônibus para ele. O guia da excursão precisa saber a idade média dos
passageiros e sortear o nome de uma pessoa para ganhar o almoço na primeira parada do
ônibus. Proponha uma solução web, utilizando JavaScript, para resolver esse problema.

Utilize prompt() e write()
*/

// Inicializa arrays para armazenar nomes e idades dos passageiros
var nomes = [];
var idades = [];

// Solicita o número de passageiros no ônibus
var numeroPassageiros = prompt("Quantos passageiros estão no ônibus?");

// Converte o número de passageiros para um número inteiro
var totalPassageiros = parseInt(numeroPassageiros);

// Verifica se o número de passageiros é válido (maior que zero)
if (totalPassageiros > 0) {
    // Loop para coletar os nomes e idades dos passageiros
    for (var i = 0; i < totalPassageiros; i++) {
        var nomePassageiro = prompt("Digite o nome do passageiro #" + (i + 1) + ":");
        var idadePassageiro = prompt("Digite a idade do passageiro #" + (i + 1) + ":");
        
        // Adiciona os nomes e idades aos arrays
        nomes.push(nomePassageiro);
        idades.push(parseInt(idadePassageiro));
    }

    // Calcula a idade média dos passageiros
    var somaIdades = idades.reduce(function (a, b) {
        return a + b;
    }, 0);
    var idadeMedia = somaIdades / totalPassageiros;

    // Escolhe um passageiro aleatório para ganhar o almoço
    var indiceGanhador = Math.floor(Math.random() * totalPassageiros);
    var nomeGanhador = nomes[indiceGanhador];

    // Exibe a idade média e o nome do ganhador no corpo da página
    document.write("A idade média dos passageiros é: " + idadeMedia.toFixed(2) + " anos.<br>");
    document.write(nomeGanhador + " ganhou o almoço na primeira parada do ônibus!");

} else {
    // Se o número de passageiros for inválido
    document.write("Número inválido de passageiros. Por favor, insira um número maior que zero.");
}
