window.addEventListener("load", function () {

    document.getElementById("btnPlay").addEventListener("click", iniciarCronometro);
    document.getElementById("btnPause").addEventListener("click", pararCronometro);

    function iniciarCronometro() {
        controlarBtn(true, false)
        cronometro = setInterval(exibirNumero, 500);
    }

    function pararCronometro() {
        controlarBtn(false, true)
        clearInterval(cronometro);
    }

    function exibirNumero() {
        random = Math.floor(Math.random() * 10) + 1;
        document.getElementById("numero").innerHTML = random;
    }

    function controlarBtn(disabledPlay, disabledPause=true) {
        document.getElementById("btnPlay").disabled = disabledPlay;
        document.getElementById("btnPause").disabled = disabledPause;
    }

    controlarBtn()
});