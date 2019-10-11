function validar(){
    var valor_email = email.value;
    var valor_senha = senha.value;
    var valor_confirmacao = confirmacao.value;
    var time_coracao = times2.value;
    if(valor_email.indexOf('@') != -1 && valor_senha=='futebol' && valor_confirmacao==valor_senha){
        div_mensagem.innerHTML = 'Usuário autenticado';
        fotofundo.src= `${time_coracao}.jpg`;
    }
    else{
        div_mensagem1.innerHTML = 'Falha na autentificação';
    }

} 