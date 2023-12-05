document.addEventListener("DOMContentLoaded", function () {
    var characterImage = document.getElementById("characterImage");
    var marioScoreParagraph = document.getElementById("marioScore");
    var luigiScoreParagraph = document.getElementById("luigiScore");

    var marioScore = 0;
    var luigiScore = 0;

    function changeCharacter(character, scoreParagraphId) {
        characterImage.src = "img/" + character;
        characterImage.name = scoreParagraphId;
    }

    function incrementScore() {
        characterImage.name === 'marioScore' ? marioScore++ : luigiScore++;
        marioScoreParagraph.innerText = "Pontuação Mario: " + marioScore;
        luigiScoreParagraph.innerText = "Pontuação Luigi: " + luigiScore;
    }
    
    window.changeCharacter = changeCharacter;
    window.incrementScore = incrementScore;
});
