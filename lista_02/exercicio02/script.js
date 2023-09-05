/* 
Construa uma página web capaz de solicitar o nome completo do usuário e, em seguida,
escrever no corpo do documento o nome informado e a quantidade de caracteres presentes no
texto.

Utilize prompt() e write()
 */

// Solicita o nome completo do usuário usando prompt().
var nomeCompleto = prompt("Informe seu nome completo:");

// Calcula o número de caracteres no nome completo.
var numCaracteres = nomeCompleto.length;

// Monta a mensagem a ser exibida.
var mensagem = "Nome completo: " + nomeCompleto + "<br>Quantidade de caracteres: " + numCaracteres;

// Exibe a mensagem usando document.write().
document.write("<p>" + mensagem + "</p>");