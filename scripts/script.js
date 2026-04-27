function logar(){

        let login1 = document.getElementById('login').value;
        let senha1 = document.getElementById('senha').value;
        
        if (login1 == "admin" && senha1 == "admin") {
        localStorage.setItem("perfil", "GESTOR");
        localStorage.setItem("usuario", login1);

        alert("Seja Bem Vindo, " + login1);
        window.location.href = "telaprincipal.html";

    } else if (login1 == "operacional" && senha1 == "opec2026") {
        localStorage.setItem("perfil", "ATENDIMENTO");
        localStorage.setItem("usuario", login1);

        alert("Seja Bem Vindo, " + login1);
        window.location.href = "telaprincipal.html";

    } else {
        alert("Email ou Usuário inválidos.");
        document.getElementById('senha').value = "";
    }

}

// ================= AO CARREGAR =================
document.addEventListener("DOMContentLoaded"), function () {

    // Mostrar usuário logado
    const perfil = localStorage.getItem("perfil");
    const usuario = localStorage.getItem("usuario");
    const campoUsuario = document.getElementById("usuariologado");

    if (perfil && usuario && campoUsuario) {
        campoUsuario.innerText = usuario + " - " + perfil;
    }

    }
//  Controle de cards por perfil
    const gridcontainer = document.querySelectorAll("grid-item");

    gridcontainer.forEach(griditem => {
        const permitido = griditem.getAttribute("data-perfil");

        if (permitido && !permitido.includes(perfil)) {
            griditem.style.display = "none";
        }
    });

        /* Funções da página Produto*/

function cadastrarproduto(){

    let produto = document.getElementById('produto').value;
    let tipo = document.getElementById('tipo').value;

    alert ('Produto Cadastrado com Sucesso!!!')
    window.location.href="Produto.html"

}

function cadastrarendereco(){

    let logradouro = document.getElementById('logradouro').value;
    let numero = Number(document.getElementById('numero')).value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let estado = document.getElementById('estado').value;
    let tipo = document.getElementById('tipo').value;
    let cep = Number(document.getElementById('cep')).value;
    let cidade = document.getElementById('cidade').value;

    alert ('Endereço Cadastrado com Sucesso!!!')
    window.location.href="endereco.html"
}

function cadastrarprofissional(){
    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let registro = document.getElementById('registro').value;
    let cpf = Number(document.getElementById('cpf')).value;

    alert ('Profissional Cadastrado com Sucesso!!!')
    window.location.href="profissional.html"
}

function cadastraratendimento(){

    let cliente = document.getElementById('cliente').value;
    let profissional = document.getElementById('profissional');
    let servico = document.getElementById('servico').value;
    let data = document.getElementById('data').value;
    let status = document.getElementById('status').value;
    alert ('Atendimento Cadastrado com Sucesso!!!')
    window.location.href="atendimento.html"
}

function cadastrarservico(){

    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let preco = Number(document.getElementById('preco')).value;
    alert ('Serviço Cadastrado com Sucesso!!!')
    window.location.href="servico.html"
}

function cadastrarfornecedor(){

    let nome = document.getElementById('nome').value;
    let razao = document.getElementById('razao').value;
    let cnpj = Number(document.getElementById('cnpj')).value;
    alert ('Fornecedor Cadastrado com Sucesso!!!')
    window.location.href="fornecedor.html"
}

function cadastrarclientes(){

    let nome = document.getElementById('nome').value;
    let data = document.getElementById('datanascimento').value;
    let cpf =  Number(document.getElementById('cpf')).value;    
    alert ('Cliente Cadastrado com Sucesso!!!');
    window.location.href="cliente.html"
}

function voltar(){

    window.location.href= "telaprincipal.html"
}

function logof(){

    window.location.href= "index.html"
}

