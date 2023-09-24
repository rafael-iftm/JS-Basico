const candidates = document.querySelectorAll(".candidate");
const voteCounters = document.querySelectorAll("span");

candidates.forEach((candidate, index) => {
    let votes = 0;

    candidate.addEventListener("click", () => {
        votes++;
        voteCounters[index].textContent = votes;

        // Remove a classe "winning" de todos os candidatos
        candidates.forEach((c) => c.classList.remove("winning"));

        // Encontra o candidato com o maior número de votos
        const maxVotes = Math.max(...Array.from(voteCounters).map((el) => parseInt(el.textContent)));

        // Adiciona a classe "winning" ao(s) candidato(s) com o maior número de votos
        candidates.forEach((c, idx) => {
            if (parseInt(voteCounters[idx].textContent) === maxVotes) {
                c.classList.add("winning");
            }
        });
    });
});
