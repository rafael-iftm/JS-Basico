/* 
Construa uma página web para solicitar um TEXTO e uma das seguintes opções: 1) Itálico, 2) Negrito ou 
3)  Sublinhado.  A  página  deverá  exibir  no  corpo  do  documento  o  TEXTO  em  1)  Itálico,  2)  Negrito  ou  3) 
Sublinhado, conforme a opção escolhida pelo usuário. Para melhor compreensão, veja o exemplo abaixo: 
 
Informe um texto qualquer (a partir de um prompt): O amor é um sentimento sublime. O amor é entrega 
desde que o amor seja verdadeiro. 
Que configuração você quer aplicar (1) itálico, (2) negrito ou (3) sublinhado:  3 
(Corpo da página): O amor é um sentimento sublime. O amor é entrega desde que o amor seja verdadeiro. 

 */

function formatarTexto() {
    var texto = document.getElementById("texto").value;
    var formato = document.getElementById("formato").value;
    var resultadoElement = document.getElementById("resultado");

    resultadoElement.innerHTML = '';

    var formattedText = '<span class="' + formato + '">' + texto + '</span>';
    resultadoElement.innerHTML = formattedText;
}
