console.log("Exercício 1")

let prompt = require("prompt-sync")();

let nome = prompt("Informe o seu nome: ")
let cargo = prompt("Informe o seu cargo na empresa: ")
let salario = parseFloat(prompt("Informe o seu sálario: R$"))

if(salario < 1000) {
    let salarioacrescido = salario + (salario*(1/10))
    console.log("Nome do funcionário: " + nome)
    console.log("Cargo do funcionário: " + cargo)
    console.log("Salário do funcionário acrescido de 10%: R$" + salarioacrescido)
} else {
    console.log("Nome do funcionário: " + nome)
    console.log("Cargo do funcionário: " + cargo)
    console.log("Salário do funcionário: R$" + salario)
}
