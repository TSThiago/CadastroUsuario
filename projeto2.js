let nomes = []
let senhas = []
let parar = 0

// do {
//     nomes[nomes.length] = prompt("Insira o nome")
//     senhas[senhas.length] = prompt("Insira a senha")
//     parar = prompt("Insira 1 para parar")
// } while(parar != 1)

EscolherAcao()

function EscolherAcao(){
    let opcao = 0
    do{
        opcao = prompt("O que deseja fazer? \n1 - Cadastrar usuário \n2 - Login \n3 - Encerrar programa")
        switch(opcao){
            case "1":
                alert("Fazer cadastro:")
                break;
            case "2":
                alert("Fazer login:")
                break;
            case "3":
                alert("Programa encerrado.")
                break;
        }
    }while(opcao != 3)
}


