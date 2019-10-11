function validar(){
    var valor_email = email.value;
    var valor_senha = senha.value;
    var valor_confirmacao = confirmacao.value;

    console.log(valor_email)
    if(valor_email.indexOf('@') != -1 && valor_senha=='futebol' && valor_confirmacao==valor_senha){
        div_mensagem.innerHTML = 'Usuário autenticado';
        console.log("tttttttt")
    }
    else{
        div_mensagem1.innerHTML = 'Falha na autentificação';
        console.log("yytytyt")
    }

} 