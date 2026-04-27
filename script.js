function logar(){

        let login = document.getElementById('login').value;
        let senha = document.getElementById('senha').value;
        
        let status = " "

        if(login === "admin" || login === "operacional" && senha === "admin" || senha === "opec2026"){

            alert ('Seja Bem Vindo!!!')
           window.location.href="telaprincipal.html"

        }else{ 

            alert ('Usuário não cadastrado!!!')
             window.location.href="login.html"
        }

}

        /* Funções da página Produto*/

function cadastrarproduto(){

    let produto = document.getElementById('produto').value;
    let tipo = document.getElementById('tipo').value;

    alert ('Produto Cadastrado com Sucesso!!!')
    window.location.href="telaprincipal.html"

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
    window.location.href="telaprincipal.html"
}

function cadastrarprofissional(){
    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let registro = document.getElementById('registro').value;
    let cpf = Number(document.getElementById('cpf')).value;

    alert ('Profissional Cadastrado com Sucesso!!!')
    window.location.href="telaprincipal.html"
}

function cadastraratendimento(){

    let cliente = document.getElementById('cliente').value;
    let profissional = document.getElementById('profissional');
    let servico = document.getElementById('servico').value;
    let data = document.getElementById('data').value;
    let status = document.getElementById('status').value;
    alert ('Atendimento Cadastrado com Sucesso!!!')
    window.location.href="telaprincipal.html"
}

function cadastrarservico(){

    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let preco = Number(document.getElementById('preco')).value;
    alert ('Serviço Cadastrado com Sucesso!!!')
    window.location.href="telaprincipal.html"
}

function cadastrarfornecedor(){

    let nome = document.getElementById('nome').value;
    let razao = document.getElementById('razao').value;
    let cnpj = Number(document.getElementById('cnpj')).value;
    alert ('Fornecedor Cadastrado com Sucesso!!!')
    window.location.href="telaprincipal.html"
}

function cadastrarclientes(){

    let nome = document.getElementById('nome').value;
    let data = document.getElementById('datanascimento').value;
    let cpf =  Number(document.getElementById('cpf')).value;    
    alert ('Cliente Cadastrado com Sucesso!!!');
    window.location.href="telaprincipal.html"
}

function voltar(){

    window.location.href= "telaprincipal.html"
}

function logof(){

    window.location.href= "index.html"
}

