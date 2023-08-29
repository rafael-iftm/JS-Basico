    /*
    Construa uma página web capaz de solicitar ao usuário uma frase, em seguida, a partir da frase lida, exibir:
    - o total de frutas contidas no texto e as frutas encontradas logo abaixo
    - o total de verdutas contidas no texto e as verduras encontradas logo abaixo

    Utilize somente prompt() e write()
    */

    const frutas = [
        "maçã", "banana", "laranja", "uva", "morango",
        "pera", "manga", "kiwi", "abacate", "pêssego",
        "abacaxi", "mamão", "melancia", "amora", "framboesa",
        "cereja", "limão", "caju", "maracujá", "ameixa"
    ];
    
    const verduras = [
        "alface", "cenoura", "brócolis", "abobrinha", "espinafre", "cebola",
        "couve", "rúcula", "chicória", "almeirão", "repolho",
        "couve-flor", "beterraba", "nabo", "acelga", "agrião",
        "salsinha", "coentro", "hortelã", "radicchio"
    ];
    
    const frase = prompt("Digite uma frase:");
    const fraseSemPontuacao = frase.replace(/[^\w\s]/gi, '');
    const palavras = fraseSemPontuacao.split(" ");
    console.log(palavras)
    
    let totalFrutas = 0;
    let frutasEncontradas = [];
    let totalVerduras = 0;
    let verdurasEncontradas = [];
    
    for (const palavra of palavras) {
        const palavraLowerCase = palavra.toLowerCase();
    
        if (frutas.includes(palavraLowerCase)) {
        totalFrutas++;
        frutasEncontradas.push(palavra);
        }
        if (verduras.includes(palavraLowerCase)) {
        totalVerduras++;
        verdurasEncontradas.push(palavra);
        }
    }
    
    document.write("<p>Frase: " + frase + "</p>");
    document.write("<p>Total de frutas: " + totalFrutas + "</p>");
    document.write("<p>Frutas encontradas: " + frutasEncontradas.join(", ") + "</p>");
    document.write("<p>Total de verduras: " + totalVerduras + "</p>");
    document.write("<p>Verduras encontradas: " + verdurasEncontradas.join(", ") + "</p>");
    