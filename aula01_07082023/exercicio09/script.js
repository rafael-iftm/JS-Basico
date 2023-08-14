/* Construa uma página web capaz de solicitar ao usuário uma expressão matemática, como por
exemplo ((5*8)-9), e, em seguida, informar, através de uma mensagem de alerta, o resultado
da expressão. */

expressao = prompt("Digite uma expressão matemática (por exemplo, (5*8)-9):");
resultado = eval(expressao);

mensagem = "O resultado da expressão é: " + resultado;

alert(mensagem);
document.write(mensagem);
