/* 5. Construa uma página web capaz de solicitar ao usuário o nome completo dele e, em seguida,
escreva no corpo do documento a quantidade de caracteres contida no nome informado. */


// Solicitação do nome completo
nomeCompleto = prompt("Digite seu nome completo:");

// Calcula a quantidade de caracteres no nome
quantidadeCaracteres = nomeCompleto.length;

document.write(`O nome completo "${nomeCompleto}" tem ${quantidadeCaracteres} caracteres.<br><br>`)

// Escreve a contagem de caracteres no corpo do documento
for (i=1; i<=quantidadeCaracteres; i++){
    document.write (`[${i}] ${nomeCompleto}<br>`)
}
