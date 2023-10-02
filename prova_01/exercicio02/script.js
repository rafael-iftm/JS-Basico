/* 
Refaça o exercício anterior utilizando um formulário para entrada e saída de dados. Adicione um botão ao 
formulário para exibir o resultado da operação.
 */

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var operator = document.getElementById("operator").value;
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");
    
    var result;

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

    resultElement.textContent = "Resultado: " + result;
}
