function validateName() {
    var nameInput = document.getElementById("name");
    var resultDiv = document.getElementById("result");
    var initialsSpan = document.getElementById("initials");

    var name = nameInput.value.trim();

    var nameRegex = /^([a-zA-Z]{4,15}\s){2}[a-zA-Z]{4,15}$/;

    if (nameRegex.test(name)) {
        var nameParts = name.split(" ");
        var initials = nameParts.map(part => part.charAt(0)).join("");
        initialsSpan.innerText = initials;
        resultDiv.style.display = "block";

        localStorage.setItem("userInitials", initials);

        setTimeout(function() {
            window.location.href = "../perfil/escolherPerfil.html";
        }, 3000);
    } else {
        alert("Por favor, insira um nome válido.");
    }
}
