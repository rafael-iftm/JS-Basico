btn = document.getElementById("botao");
txt = document.getElementById("texto");

btn.addEventListener("click", exibirMsg);

function exibirMsg() {
    if (!txt.value.trim()) alert("Informe um texto!");
    else alert(txt.value.toUpperCase());
}
