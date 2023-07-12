console.log("Exercício 5")

let prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Informe um número: "))
let numero2 = parseFloat(prompt("Informe um outro número: "))


if(numero1 > numero2  ) {
    console.log("O primeiro número(" + numero1 + ") é maior que o segundo núnemro(" + numero2 + ")!")
} 
else if(numero1 == numero2) {
    console.log("O primeiro número(" + numero1 + ") é igual ao segundo número(" + numero2 + ")!")
}
else {
    console.log("O segundo número(" + numero2 + ") é maior que o primeiro número(" + numero1 + ")!")
}