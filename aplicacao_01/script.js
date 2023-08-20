/* 
Criar uma página web para solicitar o nome completo de uma pessoa e exibir no corpo dela algumas informações sobre o nome informado.

1- Quantos caracteres tem o nome
2- A primeira letra do nome
3- O nome convertido para letras maisuculas
4- O nome na cor vermelha
5- O nome escrito 5 vezes na cor azul (Utilizar um for e colocar os casos em uma lista)

Utilizando apenas pront() e write() - JavaScript
 */

// Solicita o nome completo da pessoa
nomeCompleto = prompt("Digite seu nome completo:");

// Calcula o número de caracteres no nome
numCaracteres = nomeCompleto.length;

// Pega a primeira letra do nome
primeiraLetra = nomeCompleto.charAt(0);

// Converte o nome para letras maiúsculas
nomeMaiusculo = nomeCompleto.toUpperCase();

// Cria o nome na cor vermelha
nomeVermelho = "<span style='color: red;'>" + nomeCompleto + "</span>";

// Cria o nome escrito 5 vezes na cor azul e coloca em uma lista
nomeAzul = "<span style='color: blue;'>" + nomeCompleto + "</span>";
listaNomesAzuis = "<ul>";
for (i = 0; i < 5; i++) {
    listaNomesAzuis += "<li>" + nomeAzul + "</li>";
}
listaNomesAzuis += "</ul>";

// Exibe as informações na página
document.write("<p>1- O nome tem " + numCaracteres + " caracteres.</p>");
document.write("<p>2- A primeira letra do nome é: " + primeiraLetra + ".</p>");
document.write("<p>3- O nome em letras maiúsculas é: " + nomeMaiusculo + ".</p>");
document.write("<p>4- O nome em vermelho é: " + nomeVermelho + ".</p>");
document.write("<p>5- O nome escrito 5 vezes em azul:</p>");
document.write(listaNomesAzuis);

