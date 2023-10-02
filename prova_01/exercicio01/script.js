/* 
Construa  uma  página  web  capaz  de  solicitar  dois  valores  numéricos  e  um  dos  quatro  operadores 
aritméticos:  +,  -,  *  ou  /,  correspondentes  aos  operadores  de  soma,  subtração,  multiplicação  e  divisão, 
respectivamente.  Cada  uma  dessas  três  entradas  de  dados  deverá  ser  feita  em  uma  caixa  de  diálogo 
separada.  Após  a  entrada  desses  dados,  deverá  ser  exibido  no  corpo  da  página  web  o  resultado  da 
operação aritmética escolhida pelo usuário. OBS: Não é permitido o uso do método eval() para solucionar 
esse exercício. Para melhor compreensão, veja o exemplo abaixo

Utilize prompt() e write()
 */

// Solicitar o primeiro número ao usuário
var num1 = parseFloat(prompt("Digite o primeiro número:"));

// Solicitar o operador ao usuário
var operator = prompt("Escolha o operador (+, -, *, /):");

// Solicitar o segundo número ao usuário
var num2 = parseFloat(prompt("Digite o segundo número:"));

var result;

// Realizar a operação com base no operador escolhido
if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Erro: Divisão por zero!";
    }
} else {
    result = "Operador inválido!";
}

// Exibir o resultado na página
document.write("Resultado: " + result);