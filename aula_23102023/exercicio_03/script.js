window.addEventListener("load", function () {

    document.getElementById("btnMostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro() {
        setTimeout(exibirNome, 3000);
    }

    function exibirNome() {
        random = Math.floor(Math.random() * 10) + 1;
        document.getElementById("numero").innerHTML = random;
    }
});