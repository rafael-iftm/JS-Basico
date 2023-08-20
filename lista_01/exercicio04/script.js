/* 
Solicite ao usuário as notas do 1o e 2o bimestres e, em seguida, informe se ele foi
aprovado/reprovado na disciplina. Um aluno será aprovado se a soma das notas for maior ou
igual a 60,0 pontos. Caso ele tenha sido reprovado informe a quantidade de pontos faltantes
para ele ter sido aprovado.
 */

// Solicitação das notas ao usuário
nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));

// Calcula a soma das notas
somaNotas = nota1 + nota2;

// Verifica se o aluno foi aprovado
if (somaNotas >= 60) {
  alert("Aluno aprovado!");
} else {
  pontosFaltantes = 60 - somaNotas;
  alert(`Aluno reprovado. Faltaram ${pontosFaltantes} pontos para aprovação.`);
}
