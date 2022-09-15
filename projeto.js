nomes = []
senhas = []
nomesAux = []
senhasAux = []
index = parseInt(0)
continuar = true

while (continuar == true) {
    opcoes = prompt("O que deseja fazer? \n1 - Cadastrar usuário novo \n2 - Fazer login \n3 - Excluir cadastro \n4 - Encerrar operação")

    // Fazer cadastro
    if (opcoes == 1) {
        nomes[index] = prompt("Insira o nome para cadastrar")
        senhas[index] = prompt("Insira a senha para cadastrar")
        console.log(nomes)
        console.log(senhas)
        index++
    }

    // Fazer login
    if (opcoes == 2) {
        nomeLogin = prompt("Insira seu nome para logar")
        senhasLogin = prompt("Insira sua senha")
        login = false
        for (index = 0; index < nomes.length; index++) {
            if (nomeLogin == nomes[index] && senhasLogin == senhas[index]) {
                console.log("Login efetuado.")
                login = true
            } else if (login == false) {
                console.log("Erro no login")
            }
        }
    }
    // Excluir cadastro
    if (opcoes == 3) {
        nomeExcluir = prompt("Qual o nome do cadastro para excluir?")
        excluir = false
        for (index = 0; index < nomes.length; index++) {
            if (nomeExcluir == nomes[index]) {
                console.log("Cadastro excluído.")
                excluir = true
                nomes[index] = 0
                senhas[index] = 0
            }
        }
        if (excluir == true) {
            for (index = 0; index < nomes.length - 1; index++) {
                for (seguinte = index + 1; seguinte < nomes.length; seguinte++) {
                    if (nomes[index] == 0) {
                        nomes[index] = nomes[seguinte]
                        senhas[index] = senhas[seguinte]
                        nomes[seguinte] = 0
                        senhas[seguinte] = 0
                    }
                }
            } for (index = 0; index < nomes.length; index++) {
                if (nomes[index] != 0) {
                    nomesAux[index] = nomes[index]
                    senhasAux[index] = senhas[index]
                }
            }
            nomes = nomesAux
            senhas = senhasAux
            nomesAux = []
            senhasAux = []
        }else if (exluir == false) {
        console.log("Erro ao excluir cadastro.")
    }
}
    console.log(nomes)
    console.log(senhas)
    // Encerra operação
    if (opcoes == 4) {
        continuar = false
    }

}
console.log("Programa encerrado.")