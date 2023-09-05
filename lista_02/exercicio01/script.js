/* 
Interprete o código abaixo (não use o navegador) e descubra o que ele faz.
_____________________________________________
<html>
<head>
<title></title>
<script type="text/javascript">
nomeCompleto = prompt("Qual o seu nome completo?");
for (i=1; i<=10; i++)
document.write("<p>"+ i +" - "+ nomeCompleto +"</p>")
</script>
</head>
<body>
</body>
</html>
_____________________________________________

Em seguida, você deverá executar o código acima no navegador e conferir a resposta produzida
com a sua resposta. Agora, altere o código-fonte acima de tal forma a atender os seguintes
requisitos:
• Ao invés de solicitar o nome completo da pessoa, a página deverá solicitar: o primeiro
nome e, em seguida, o sobrenome, em caixas de diálogo diferentes. Em seguida exibir o
nome completo da pessoa (nome + sobrenome) N vezes no corpo da página, um em cada
linha diferente, conforme mostrado no código acima. OBS: A quantidade N deverá ser
informada pelo usuário, através de uma caixa de diálogo.
• A página deverá solicitar também do usuário a cor que ele deseja ver no nome dele. A
aplicação da cor no nome completo deverá obedecer a seguinte sequência: 1o nome –
PRETO, 2o nome – COR INFORMADA PELO USUÁRIO, 3o nome – PRETO, 4o nome
- COR INFORMADA PELO USUÁRIO, e assim sucessivamente.

Utilize prompt() e write()
 */

// Solicita a quantidade de vezes que o nome completo será exibido.
var n = parseInt(prompt("Digite a quantidade de vezes:"));

// Solicita o primeiro nome do usuário.
var primeiroNome = prompt("Digite o primeiro nome:");

// Solicita o sobrenome do usuário.
var sobrenome = prompt("Digite o sobrenome:");

// Solicita a cor que o usuário deseja para o sobrenome.
var corNome = prompt("Digite a cor para o sobrenome (inglês):");

// Loop que itera de 1 até a quantidade informada (n).
for (var i = 1; i <= n; i++) {
    // Define a cor atual com base na paridade da iteração.
    var corAtual = (i % 2 === 0) ? corNome : "black";

    // Monta o nome completo com o estilo de cor definido.
    var nomeCompleto = "<font color='" + corAtual + "'>" + primeiroNome + " " + ((i % 2 === 0) ? sobrenome : "") + "</font>";

    // Escreve o nome completo na página dentro de um parágrafo.
    document.write("<p>" + nomeCompleto + "</p>");
}
