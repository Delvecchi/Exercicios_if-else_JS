console.log("Exercício 1")

let prompt = require("prompt-sync")();

let nome = prompt("Informe o nome do funcionário: ")
let cargo = prompt("Informe o cargo do funcionário: ")
let salario = parseFloat(prompt("Informe o salario do funcionário: R$"))

if(salario < 1000) {
    let salarioacrescido = salario + (salario*(1/10))
    console.log("Nome do funcionário: " + nome)
    console.log("Cargo do funcionário: " + cargo)
    console.log("Salário do funcionário acrescido de 10%: R$" + salarioacrescido.toFixed(2))
} else {
    console.log("Nome do funcionário: " + nome)
    console.log("Cargo do funcionário: " + cargo)
    console.log("Salário do funcionário: R$" + salario.toFixed(2))
}
