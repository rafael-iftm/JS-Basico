window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        // Obter o valor digitado no input
        var nome = document.getElementById("name").value;

        // Criar a tag da box
        var box = document.getElementById("box")
        box.style.display = "flex";
        box.style.flexDirection = "row"
        box.style.flexWrap = "wrap"

        // Criar a tag de div
        var div = document.createElement("div");
        div.style.textAlign = "center";

        // Criar a tag de imagem
        var img = document.createElement("img");
        img.setAttribute("src", "img/tita-colossal.png");
        img.style.width = "50%"

        // Criar um parágrafo para exibir o nome
        var p = document.createElement("p");
        p.textContent = nome;

        // Adicionar a imagem e o parágrafo à div
        div.appendChild(img);
        div.appendChild(p);

        // Adicionar a div ao elemento com o ID "box"
        document.getElementById("box").appendChild(div);
    });
});
