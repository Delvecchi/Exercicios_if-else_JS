console.log("Exercício 6")

let prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Informe a primeira nota: "))
let nota2 = parseFloat(prompt("Informe a segunda nota: "))
let nota3 = parseFloat(prompt("Informe a terceira nota: "))
let nota4 = parseFloat(prompt("Informe a quarta nota: "))

let resultado = (nota1 + nota2 + nota3 + nota4)/4


if(resultado >= 7) {
    console.log("APROVADO! Nota final " + resultado + "!")
} 
else if(resultado >= 5 && resultado <7) {
    console.log("RECUPERAÇÃO! Nota final " + resultado + "!")
}
else {
    console.log("REPROVADO! Nota final " + resultado + "!")
}