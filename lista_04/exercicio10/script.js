/*
Construa uma página web capaz de solicitar ao usuário um valor inteiro positivo maior ou
igual 2 e, em seguida, a partir do número lido, exibir uma tabela no corpo do documento da
página, conforme mostrado no exemplo a seguir, contendo os valores de 0 (zero) até o
número informado pelo usuário nos seguintes sistemas de numeração: decimal, binário e
hexadecimal.
• Exemplo: número informado = 3
• Tabela gerada e exibida no corpo do documento:

Base decimal Base binária Base hexadecimal
0 0 0
1 1 1
2 10 2
3 11 3

Utilize prompt() e write()
*/

// Solicita um valor inteiro positivo maior ou igual a 2 ao usuário usando prompt().
var numero = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2:"));

// Verifica se o número é válido.
if (isNaN(numero) || numero < 2) {
    document.write("<p>Número inválido. Por favor, recarregue a página e insira um valor válido.</p>");
} else {
    // Monta o cabeçalho da tabela.
    document.write("<table>");
    document.write("<tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr>");

    // Preenche a tabela com os valores das bases.
    for (var i = 0; i <= numero; i++) {
        var valorBinario = i.toString(2);
        var valorHexadecimal = i.toString(16).toUpperCase();
        document.write("<tr><td>" + i + "</td><td>" + valorBinario + "</td><td>" + valorHexadecimal + "</td></tr>");
    }

    document.write("</table>");
}