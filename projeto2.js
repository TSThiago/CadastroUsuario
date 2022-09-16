let nomes = ["Thiago", "Luiz", "Anderson"]
let senhas = ["1", "2", "3"]

EscolherAcao()

function EscolherAcao() {
    let opcao = 0
    do {
        opcao = prompt("O que deseja fazer? \n1 - Cadastrar usuário \n2 - Login \n3 - Excluir Cadastro \n4 - Encerrar programa")
        switch (opcao) {
            case "1":
                alert("Fazer cadastro:")
                CadastrarUsuario()
                break;
            case "2":
                alert("Fazer login:")
                FazerLogin(PedirNome(),PedirSenha())
                break;
            case "3":
                alert("Excluir cadastro:")
                ExcluirCadastro(PedirNome())
                break;
            case "4":
                alert("Programa encerrado.")
                break;
            default: 
                alert("Opção inválida!")
        }
    } while (opcao != 4)
}

function ExcluirCadastro(nomeParametro) {
    let mensagem = false
    nomes.forEach((nome, index) => {
        if (nomeParametro == nomes[index]) {
            mensagem = true
            nomes[index] = null
            senhas[index] = null
            let nomesAux = nomes.filter(x => x != null)
            let senhasAux = senhas.filter(x => x != null)
            nomes = nomesAux
            senhas = senhasAux
            console.log(nomes)
            console.log(senhas)
            return alert("Cadastro excluído com sucesso!")

        }
    })
    if(!mensagem){
    console.log(nomes)
    console.log(senhas)
    return alert("ERR0! Cadastro não encontrado.")
}
}

function FazerLogin(nomeParametro,senhaParametro) {
    let mensagem = false
    nomes.forEach((x, index) => {
        if (x == nomeParametro && senhaParametro == senhas[index]) {
                mensagem = true
                return alert("Login efetuado com sucesso!")
            }
    })
    if (!mensagem)
        return alert("Erro ao fazer o login.")
}

function PedirNome(){
    let nomeParametro = prompt("Insira o nome")
    return nomeParametro
}
function PedirSenha(){
    let senhaParametro = prompt("Insira a senha")
    return senhaParametro
}

function CadastrarUsuario() {
    nomes[nomes.length] = prompt("Insira o nome")
    senhas[senhas.length] = prompt("Insira a senha")
}
