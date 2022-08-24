// 1. Crie um algoritmo com dois arrays, um para guardar os nomes e outro para guardar
// as senhas do seu usuário.
// 2. Faça uma lógica para preencher os vetores com as informações que o usuário
// inserir, faça com que o usuário possa escolher quando parar de inserir informações.
// 3. Continuando do exercício anterior, acrescente a opção para o usuário se ele deseja
// cadastrar, fazer login ou encerrar a operação.
// 4. Para fazer o login você deve perguntar para o usuário qual o nome dele e a senha,
// então no array de nomes procure pelo nome inserido e se se achar compare a
// senha também no array de senhas.
// 5. No login caso não ache o nome no vetor ou a senha esteja errada, retorne uma
// mensagem de erro ao usuário.
// 6. Por último acrescente a opção do seu usuário excluir um cadastro, para isso peça o
// nome para buscar no array de nomes e exclua o nome e a senha correspondente do
// outro array. Quando o cadastro for deletado você deve arrumar os arrays para que
// não fique uma posição vazia ou nula dentro dele.

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