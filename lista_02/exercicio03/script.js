/* 
Construa uma página web capaz de solicitar o nome completo do usuário e, em seguida,
exibir através de uma mensagem de alerta o nome informado contendo apenas letras
maiúsculas.

Utilize prompt() e write()
*/

// Solicita o nome completo do usuário usando prompt().
var nomeCompleto = prompt("Informe seu nome completo:");

// Converte o nome para letras maiúsculas.
var nomeMaiusculo = nomeCompleto.toUpperCase();

// Monta a mensagem a ser exibida.
var mensagem = "Nome completo em maiúsculas: " + nomeMaiusculo;

// Exibe a mensagem usando alert().
alert(mensagem);