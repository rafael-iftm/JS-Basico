/* Construa uma página web capaz de solicitar ao usuário três valores numéricos diferentes,
correspondentes aos valores RGB, nesta ordem. Informe na caixa de diálogo que cada valor
deverá estar dentro do intervalo [0,255]. Após a leitura dos três valores, o texto “Fundamentos
de Web Design II” deverá ser exibido ao usuário no corpo do documento da página com a cor
informado pela usuário. */

red = parseInt(prompt("Digite o valor para o canal de cor vermelha (0-255):"));
green = parseInt(prompt("Digite o valor para o canal de cor verde (0-255):"));
blue = parseInt(prompt("Digite o valor para o canal de cor azul (0-255):"));

// Certificando-se de que os valores RGB estão dentro do intervalo [0, 255]
red = Math.min(255, Math.max(0, red));
green = Math.min(255, Math.max(0, green));
blue = Math.min(255, Math.max(0, blue));

colorStyle = 'style="color: rgb(' + red + ', ' + green + ', ' + blue + ');"';
texto = '<p ' + colorStyle + '>Fundamentos de Web Design II</p>';
document.write(texto);