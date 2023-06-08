var setaDireita = window.document.getElementById("setaD");
var setaEsquerda = window.document.getElementById("setaE");
var leonardo = window.document.getElementById("leonardo");
var samanta = window.document.getElementById("samanta");
var bruna = window.document.getElementById("bruna");




function rolarDireita(){
    leonardo.style ="display:none";
    bruna.style ="display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style ="display:flex";
}

function rolarEsquerda(){
    bruna.style ="display:none";
    leonardo.style ="display:flex";
    setaDireita.style="display:flex";
    setaEsquerda.style="display:none";
}