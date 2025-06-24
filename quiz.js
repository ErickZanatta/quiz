const divbtniniciar = document.getElementById("iniciarjogo")
const divcaixaquiz = document.getElementById("caixaquiz")
const h2perguntadoquiz = document.getElementById("perguntadoquiz")


let indicepergutas = 0

//---------------------------------------------------------------arrays-----------------------------------------------------------
const perguntas = [{
        perguntas: "Qual é o maior deserto do mundo?",
        opcoes: ["Saara", "Antartica", "Itacoatiara",],respostacorreta:"Antartica"
    },

    {
        perguntas: "Qual é a capital do Brasil?",
        opcoes: ["Rio de janeiro", "São paulo", "Brasilia"],respostacorreta:"Brasilia"
    },

    {
        perguntas: "Qual é a capital da Austrália?",
        opcoes: ["camberra", "Sidney", "Rio grande do sul"],respostacorreta:"camberra"
    },

    {
        perguntas: "Qual é o país com maior população no mundo?",
        opcoes: ["India", "China", "Japão"],respostacorreta:"India"
    },

    {
        perguntas: " Qual a linha imaginária que atravessa o Brasil?",
        opcoes: ["Equador", "Tropico de capricornio", "Tropico de cancêr"],respostacorreta:"Equador"
    },

    {
        perguntas: "Qual o oceano que banha o Brasil?",
        opcoes: ["Atlantico", "Pacfico", "Indico"],respostacorreta:"Atlantico"
    },
]
//---------------------------------------------------------------arrays-----------------------------------------------------------

function btnIniciarJogo() {
    fecharbotaoinicio()
    abrirtelajogo()
}

function fecharbotaoinicio() {
    divbtniniciar.remove()
}


function abrirtelajogo() {
    divcaixaquiz.classList.add("active")
    h2perguntadoquiz.textContent = perguntas[indicepergutas].perguntas;
    opcoesRespostas.innerHTML = ""
    perguntas[indicepergutas].opcoes.forEach(opcao => {

        //adicionando perguntas
        const btnpergunta = document.createElement("button")
        btnpergunta.textContent = opcao

        //adicionar classe css no botao
        btnpergunta.classList.add("answer-btn")
        btnpergunta.addEventListener("click", () => validarrepostacorreta(opcao))
        opcoesRespostas.appendChild(btnpergunta)
    })
}

function validarrepostacorreta(opcoselecionada) {
    const btnresposta = opcoesRespostas.querySelector("answer-btn")

    if(perguntas[indicepergutas].respostacorreta == opcoselecionada){
        btnresposta.forEach (opcao => {
            if(botao.textContent == opcoselecionada){
                btnpergunta.classList.add("answer-btn.correct")
            }
        })
    }
}


function proximapergunta() {
    indicepergutas++
    if (indicepergutas < perguntas.length) {
        abrirtelajogo()

    } else {
        alert("sem mais perguntas...")
    }

}