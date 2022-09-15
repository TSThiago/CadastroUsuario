let nomes = []
let senhas = []
let parar = 0

do {
    nomes[nomes.length] = prompt("Insira o nome")
    senhas[senhas.length] = prompt("Insira a senha")
    parar = prompt("Insira 1 para parar")
} while(parar != 1)