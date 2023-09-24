var btn = document.getElementById("botao");
var text = document.getElementById("texto");

btn.addEventListener("click", exibirMsg);

function exibirMsg() {
    if (!text.value.trim()) alert("Informe um texto!");
    else alert(text.value);
}
