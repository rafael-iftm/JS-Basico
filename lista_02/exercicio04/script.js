/* 
Construa uma página web capaz de solicitar o nome completo do usuário e, em seguida,
exibir através de uma mensagem de alerta o primeiro nome dele contendo letras maiúsculas
e o restante composto apenas por letras minúsculas.

Utilize prompt() e write()
 */

// Solicita o nome completo do usuário usando prompt().
var nomeCompleto = prompt("Informe seu nome completo:");

// Divide o nome completo em partes separadas por espaços.
var partesNome = nomeCompleto.split(" ");

// Obtém o primeiro nome.
var primeiroNome = partesNome[0];

// Converte o primeiro nome para maiúsculas e o restante para minúsculas.
var primeiroNomeMaiusculo = primeiroNome.toUpperCase();
var restanteNomeMinusculo = partesNome.slice(1).join(" ").toLowerCase();

// Monta o nome formatado.
var nomeFormatado = primeiroNomeMaiusculo + " " + restanteNomeMinusculo;

// Monta a mensagem a ser exibida.
var mensagem = "Nome formatado: " + nomeFormatado;

// Exibe a mensagem usando alert().
alert(mensagem);