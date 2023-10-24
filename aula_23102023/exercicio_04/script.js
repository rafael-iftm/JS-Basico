window.addEventListener("load", function () {

    document.getElementById("btnMostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro() {
        setInterval(exibirNumero, 500);
    }

    function exibirNumero() {
        random = Math.floor(Math.random() * 10) + 1;
        document.getElementById("numero").innerHTML = random;
    }
});