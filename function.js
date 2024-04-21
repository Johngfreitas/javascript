
console.log('codigo fora da função');

let alunos = [
 "Francisclaidson"
]

function exibirAlunos(listaDeAlunos, quantidade) {
    console.log(listaDeAlunos);
    console.log(quantidade);
}
//exibirAlunos(alunos, 30);
//exibirAlunos("Maria", 40);

let nomeDoAluno = "Francisclaidson"

function converterEmLetrasMaiusculas (aluno){
return aluno.toUpperCase();
}

let letras = converterEmLetrasMaiusculas(nomeDoAluno);

//console.log(letras);

let soma = function(n1, n2){
    return n1 + n2;
}

let 

function calculadora (n1, n2, action) {
    return action(n1, n2)
}

let resultado = calculadora (10, 20, soma);

console.log(resultado);