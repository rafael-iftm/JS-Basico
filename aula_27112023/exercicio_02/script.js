window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        // Criar a tag de imagem
        var img = document.createElement("img");

        // Adicionar o atributo src à tag de imagem
        img.setAttribute("src", "img/stick-man.jpg");
        // img.src = "img/stick-man.jpg";

        // Adicionar a imagem ao corpo do documento (ou a qualquer outro elemento desejado)
        document.body.appendChild(img);
    });
});
