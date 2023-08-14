/* Construa uma página web capaz de solicitar o nome completo do usuário e, em seguida, exiba,
através de uma mensagem de alerta, o nome informado contendo apenas letras maiúsculas. */

nomeCompleto = prompt("Informe seu nome completo:");
nomeMaiusculo = nomeCompleto.toUpperCase();

mensagem = "Nome em maiúsculas: " + nomeMaiusculo;

alert(mensagem);
document.write(mensagem);