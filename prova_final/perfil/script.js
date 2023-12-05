var initials = localStorage.getItem("userInitials");
setProfileText(initials);

function setProfileText(initials) {
    var profileText = document.getElementById("profileText");
    if (initials) {
        profileText.innerText = initials + ", qual o seu perfil?";
    } else {
        profileText.innerText = "Bem-vindo, escolha seu perfil:";
    }
}

function displayErrorMessage(message) {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = message;
}

function visualizarPerfil() {
    var profileSelect = document.getElementById("profileSelect");
    var selectedProfile = profileSelect.value;

    displayErrorMessage("");

    switch (selectedProfile) {
        case "selecione":
            displayErrorMessage("Selecione um dos perfis: masculino ou feminino");
            break;
        case "masculino":
            window.location.href = "../masculino/masculino.html";
            break;
        case "feminino":
            window.location.href = "../feminino/feminino.html";
            break;
        default:
            break;
    }
}