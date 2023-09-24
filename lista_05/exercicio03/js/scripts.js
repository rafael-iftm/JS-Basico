txtInput = document.getElementById("txtInput");
txtOutput = document.getElementById("txtOutput");
btn = document.getElementById("btn");

btn.addEventListener("click",mostrarDobro);

function mostrarDobro(event) {
    event.preventDefault(); // Necessário colocar, pois caso contrário a página iria ser atualizada e não iriamos consguir ver o resultado
    if (!txtInput.value.trim()) alert("Informe um valor!");
    else txtOutput.value = txtInput.value*2;
}