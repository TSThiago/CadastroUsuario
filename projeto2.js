let nomes = ["Thiago","Luiz","Anderson"]
let senhas = ["1","2","3"]
let parar = 0

EscolherAcao()

function EscolherAcao() {
    let opcao = 0
    do {
        opcao = prompt("O que deseja fazer? \n1 - Cadastrar usuário \n2 - Login \n3 - Encerrar programa")
        switch (opcao) {
            case "1":
                alert("Fazer cadastro:")
                CadastrarUsuario()
                break;
            case "2":
                alert("Fazer login:")
                FazerLogin()
                break;
            case "3":
                alert("Programa encerrado.")
                break;
        }
    } while (opcao != 3)
}

function FazerLogin() {
    let nomeUsuario = prompt("Insira o nome")
    let senhaUsuario = prompt("Insira a senha")
    let mensagem = false
    nomes.forEach((x , index) => {
        if(x == nomeUsuario){
            if(senhaUsuario == senhas[index]){
                mensagem = true
                return alert("Login efetuado com sucesso!")
            }
        }
    })
    if(!mensagem)
    return alert("Erro ao fazer o login.")
}
    function CadastrarUsuario() {
    nomes[nomes.length] = prompt("Insira o nome")
    senhas[senhas.length] = prompt("Insira a senha")
}