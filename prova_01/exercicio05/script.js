/*
Construa  uma  página  web  para  apresentar  em  seu  corpo  o  resultado  fictício  da  eleição  presidencial 
brasileira  2022  num  possível  segundo  turno.  A  página  deverá  apresentar  aleatoriamente,  após  ser 
carregada, as fotos, os nomes dos partidos, os nomes dos dois candidatos(a) e o percentual que eles(a) 
irão  obter  num  possível  segundo  turno  (esse  valor  deverá  ser  aleatório  para  ambos  os  candidatos  e  o 
somatório  deverá  ser  igual  a  100%).  OBS:  As  fotos  dos  rostos  dos  quatro  candidatos  melhores 
posicionados  nas  intenções  de  voto  divulgado  pela  pesquisa  realizada  pela  FSB  e  BTG  Pactual  estão 
disponíveis  na  pasta  anexada  a  este  documento.  Além  disso,  a  página  deverá  informar  o  nome  do 
candidato vencedor (utilize uma  letra maior) após os dados dos candidatos. Para melhor compreensão, 
veja os exemplos abaixo: 
 
Exemplo 01: (após pressionar F5 do teclado) 
 
Candidato(a) vencedor(a): Luiz Inácio Lula da Silva (56.3%)  
Exemplo 02: (após pressionar F5 do teclado) 
 
Candidato(a) vencedor(a): Jair Bolsonaro (55.9%) 
 
 
Simone Tebet 
Partido (MDB) 
Resultado: 43.7% 
Luiz Inácio Lula da Silva 
Partido (PT) 
Resultado: 56.3% 
 
 
Ciro Gomes 
Partido (PDT) 
Resultado: 44.1% 
Jair Bolsonaro 
Partido (PL) 
Resultado: 55.9% 

*/

function gerarPorcentagemAleatoria() {
    return Math.random() * 100; // Resultado entre 0% e 100%
}

function gerarPorcentagemAleatoria() {
    return Math.random() * 100; // Resultado entre 0% e 100%
}

function gerarCandidatosAleatorios() {
    let porcentagem1, porcentagem2;

    porcentagem1 = gerarPorcentagemAleatoria();
    porcentagem2 = 100 - porcentagem1;

    const candidatos = [
        { nome: "Ciro Gomes", partido: "PDT", porcentagem: 0 },
        { nome: "Jair Bolsonaro", partido: "PL", porcentagem: 0 },
        { nome: "Simone Tebet", partido: "MDB", porcentagem: 0 },
        { nome: "Luiz Inacio Lula da Silva", partido: "PT", porcentagem: 0 }
    ];

    const candidatoSorteado1 = Math.floor(Math.random() * 4);
    const candidatoSorteado2 = (candidatoSorteado1 + 1 + Math.floor(Math.random() * 3)) % 4;

    candidatos[candidatoSorteado1].porcentagem = porcentagem1;
    candidatos[candidatoSorteado2].porcentagem = porcentagem2;

    return [candidatos[candidatoSorteado1], candidatos[candidatoSorteado2]];
}

function exibirCandidatos() {
    const vencedor = document.getElementById('vencedor');
    const candidatosContainer = document.getElementById('candidatos');
    candidatosContainer.innerHTML = '';

    const candidatos = gerarCandidatosAleatorios();
    
    const vencedorNome = candidatos.reduce((prev, current) => (prev.porcentagem > current.porcentagem) ? prev : current).nome;

    vencedor.textContent = 'Candidato(a) vencedor(a): ' + vencedorNome + ' (' + candidatos.find(c => c.nome === vencedorNome).porcentagem.toFixed(1) + '%)';

    candidatos.forEach(candidato => {
        const candidatoDiv = document.createElement('div');
        candidatoDiv.classList.add('candidato');

        const img = document.createElement('img');
        img.src = `img/${candidato.nome.replace(/\s+/g, '-').toLowerCase()}.png`;
        img.alt = candidato.nome;

        const nomePartido = document.createElement('p');
        nomePartido.textContent = candidato.nome + ' (' + candidato.partido + ')';

        const porcentagem = document.createElement('p');
        porcentagem.textContent = 'Resultado: ' + candidato.porcentagem.toFixed(1) + '%';

        candidatoDiv.appendChild(img);
        candidatoDiv.appendChild(nomePartido);
        candidatoDiv.appendChild(porcentagem);

        candidatosContainer.appendChild(candidatoDiv);
    });
}

window.addEventListener('load', exibirCandidatos);

// Atualizar a cada pressionar F5 (tecla 116)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 116) {
        exibirCandidatos();
    }
});
