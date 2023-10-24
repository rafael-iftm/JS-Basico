window.addEventListener("load", function () {

    document.getElementById("btnPlay").addEventListener("click", iniciarCronometro);
    document.getElementById("btnPause").addEventListener("click", pararCronometro);

    function iniciarCronometro() {
        cronometro = setInterval(exibirNumero, 500);
    }

    function pararCronometro() {
        clearInterval(cronometro);
    }

    function exibirNumero() {
        random = Math.floor(Math.random() * 10) + 1;
        document.getElementById("numero").innerHTML = random;
    }
});