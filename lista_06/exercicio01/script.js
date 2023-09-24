const character = document.getElementById("character");
const message = document.getElementById("message");

character.addEventListener("mouseover", () => {
    character.src = "img/Assustado.png";
    message.innerText = "O que você quer?";
});

character.addEventListener("mouseout", () => {
    character.src = "img/Pensativo.png";
    message.innerText = "zzzzzzzzz!";
    character.classList.remove("animate-happy"); // Remove a classe de animação de felicidade
    character.classList.remove("animate-nervous"); // Remove a classe de animação de nervosismo
});

character.addEventListener("click", () => {
    const name = prompt("Digite seu nome:");
    
    if (name === null || name.trim() === "") {
        character.src = "img/Nervoso.png";
        message.innerText = "Não me faça perder o meu tempo!";
        character.classList.add("animate-nervous"); // Adiciona a classe de animação nervosa
        character.classList.remove("animate-happy"); // Remove a classe de animação de felicidade
    } else {
        character.src = "img/Alegre.png";
        message.innerText = `${name}, seja bem-vindo!`;
        character.classList.add("animate-happy"); // Adiciona a classe de animação de felicidade
        character.classList.remove("animate-nervous"); // Remove a classe de animação de nervosismo
    }
});

// Remove as classes de animação após a conclusão
character.addEventListener("animationend", () => {
    character.classList.remove("animate-happy");
    character.classList.remove("animate-nervous");
});
