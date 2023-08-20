/* 
Crie uma página web capaz de solicitar ao usuário o nome completo dele. Em seguida, peça a
ele para informar a idade. Por último, informe-o, através de uma mensagem de diálogo, se ele
já possui idade suficiente para tirar carteira de motorista. Utilize o formato para exibir a
mensagem final: FULANO, você já POSSUI idade para tirar carteira ou FULANO, você ainda
NÃO POSSUI idade para tirar carteira, ainda falta(m) X anos. 
*/

// Solicitação do nome completo
nomeCompleto = prompt("Digite seu nome completo:");

// Solicitação da idade
idade = parseInt(prompt("Digite sua idade:"));

// Verifica se o usuário possui idade para tirar carteira de motorista
if (idade >= 18) {
    alert(`${nomeCompleto}, você já POSSUI idade para tirar carteira.`);
} else {
    anosFaltantes = 18 - idade;
    alert(`${nomeCompleto}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${anosFaltantes} ano(s).`);
}