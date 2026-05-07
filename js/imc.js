// criando calculo imc
let peso = 85
let alturaM = 1.85
let resp = peso / (alturaM * alturaM)
let situacao

if (resp <= 18.5) {
    situacao = "Abaixo do peso normal"
} else if (resp >=18.51 && resp <= 24.9) {
    situacao = "Peso normal"
} else if (resp >=24.91 && resp <= 29.9) {
    situacao = "Excesso de peso"
} else if (resp >=29.91 && resp <= 34.9) {
    situacao = "Obesidade classe I"
} else if (resp >=34.91 && resp <= 39.9) {
    situacao = "Obesidade classe II"
} else if (resp >=39.91 && resp >= 40.0) {
    situacao = "Obesidade classe III"
}

let imc = document.getElementById("imc")
let classificacao = document.getElementById("classificacao")
let alturaText = document.getElementById("alturaText")
let pesoText = document.getElementById("pesoText")

classificacao.textContent = situacao
imc.textContent = resp
alturaText.textContent = alturaM
pesoText.textContent = peso