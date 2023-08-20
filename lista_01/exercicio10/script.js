/* Construa uma página web capaz de solicitar do usuário um valor inteiro positivo (X) maior
do que zero e, em seguida, o nome completo dele. Exiba no corpo do documento HTML o
nome da pessoa informado X vezes. Os nomes deverão ser exibidos em linhas diferentes. */

x = parseInt(prompt("Digite um valor inteiro positivo maior que zero (X):"));
    
// Certificando-se de que x seja positivo e maior que zero
if (x > 0) {
    nomeCompleto = prompt("Informe seu nome completo:");
  
    nomesRepetidos = '';
    for (i = 0; i < x; i++) {
        nomesRepetidos += nomeCompleto + '<br>';
    }
  
  document.write(nomesRepetidos);
} else {
  document.write("O valor de X deve ser um inteiro positivo maior que zero.");
}