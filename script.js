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
