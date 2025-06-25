const divbtniniciar = document.getElementById("iniciarjogo");
const divcaixaquiz = document.getElementById("caixaquiz");
const h2perguntadoquiz = document.getElementById("perguntadoquiz");
const btniniciar = document.getElementById("botaojogar");
const btnproxima = document.getElementById("btnproximo");
const opcoesRespostas = document.getElementById("opcoesRespostas");
const btnreload = document.getElementById("reload");
const placar = document.getElementById("placar");

btniniciar.addEventListener("click", btnIniciarJogo);
btnproxima.addEventListener("click", proximapergunta);
btnreload.addEventListener("click", () => window.location.reload());


let indicepergutas = 0;
let respostaCorretas = 0;

//---------------------------------------------------------------arrays-----------------------------------------------------------
const perguntas = [
    {
        perguntas: "Qual é o maior deserto do mundo?",
        opcoes: ["Saara", "Antartida", "Itacoatiara", "acre"],
        respostacorreta: "Antartida"
    },
    {
        perguntas: "Qual é a capital do Brasil?",
        opcoes: ["Rio de janeiro", "São paulo", "Brasilia", "manus"],
        respostacorreta: "Brasilia"
    },
    {
        perguntas: "Qual é a capital da Austrália?",
        opcoes: ["Camberra", "Sidney", "Rio grande do sul", "palhoça"],
        respostacorreta: "Camberra"
    },
    {
        perguntas: "Qual é o país com maior população no mundo?",
        opcoes: ["India", "China", "Japão", "portugal"],
        respostacorreta: "India"
    },
    {
        perguntas: " Qual a linha imaginária que atravessa o Brasil?",
        opcoes: ["Equador", "Tropico de capricornio", "Tropico de cancêr", "tropico de virgem"],
        respostacorreta: "Equador"
    },
    {
        perguntas: "Qual o oceano que banha o Brasil?",
        opcoes: ["Atlantico", "Pacfico", "Indico", "artico"],
        respostacorreta: "Atlantico"
    },
];
//---------------------------------------------------------------arrays-----------------------------------------------------------

function btnIniciarJogo() {
    fecharbotaoinicio();
    abrirtelajogo();
}

function fecharbotaoinicio() {
    divbtniniciar.remove();
}

function abrirtelajogo() {
    divcaixaquiz.classList.add("active");
    h2perguntadoquiz.textContent = perguntas[indicepergutas].perguntas;
    opcoesRespostas.innerHTML = "";

    perguntas[indicepergutas].opcoes.forEach(opcao => {
        const btnpergunta = document.createElement("button");
        btnpergunta.textContent = opcao;
        btnpergunta.classList.add("answer-btn");
        btnpergunta.addEventListener("click", () => validarrepostacorreta(opcao));
        opcoesRespostas.appendChild(btnpergunta);

    });
    btnproxima.disabled = true;
}

function validarrepostacorreta(opcoselecionada) {
    const btnresposta = opcoesRespostas.querySelectorAll(".answer-btn");
    btnresposta.forEach(botao => {
        if (botao.textContent === perguntas[indicepergutas].respostacorreta) {
            botao.classList.add("correct");
        }
        if (botao.textContent === opcoselecionada && opcoselecionada !== perguntas[indicepergutas].respostacorreta) {
            botao.classList.add("incorrect");
        }
        botao.disabled = true;
    });

    if (opcoselecionada === perguntas[indicepergutas].respostacorreta) {
        respostaCorretas++;
    }
    btnproxima.disabled = false;
}

function resultado() {
    divcaixaquiz.classList.remove("active");
    placar.classList.add("active");
    const resultadoplacar = document.getElementById("resultadoplacar");
    const estatusvalor = estatus();

    resultadoplacar.textContent = `Você acertou ${respostaCorretas} de ${perguntas.length} perguntas! ${estatusvalor}`;

}

function porcentagem(){
        return respostaCorretas * 100 / perguntas.length;
}

function estatus(){
    const acertos = porcentagem();
    if(acertos <= 30){
        return "precisa melhorar"
    }
    if(acertos <= 70){
        return "regular"
    }
    if(acertos <= 90){
        return "muito bom"
    }
    if(acertos <= 100){
        return "excelente"
    }
}





function proximapergunta() {
    indicepergutas++;
    if (indicepergutas < perguntas.length) {
        abrirtelajogo();
    } 
    else {
        resultado();
    }
}