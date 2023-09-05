/* 
Construa uma página web para exibir no corpo do documento um número sorteado de um
dado de 6 lados. Porém, ao invés de exibir o número deverá ser exibida uma imagem
correspondente ao número sorteado, semelhante a imagem a seguir. OBS: As imagens
deverão ser criadas por você.

Utilize prompt() e write()
*/

document.addEventListener("DOMContentLoaded", function () {
    // Obtém uma referência para o botão de sorteio
    var sortearBtn = document.getElementById("sortearBtn");

    // Adiciona um ouvinte de evento para o clique no botão
    sortearBtn.addEventListener("click", function () {
        // Gere um número aleatório entre 1 e 6
        var numeroSorteado = Math.floor(Math.random() * 6) + 1;

        // Atualize a imagem de acordo com o número sorteado
        var imgElement = document.getElementById("dadoImg");
        imgElement.src = "img/dado_" + numeroSorteado + ".png"; // Suponha que as imagens tenham nomes como "dado_1.png", "dado_2.png", etc.
        imgElement.alt = "Dado com o número " + numeroSorteado;
    });
});
