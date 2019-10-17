function validar(){
    var valor_email = email.value;
    var valor_senha = senha.value;
    var valor_confirmacao = confirmacao.value;
    var valor_select = times2.value;
    if(valor_email.indexOf('@') != -1 && valor_senha=='futebol' && valor_confirmacao==valor_senha){
         div_mensagem = 'Usuário autenticado';
        if(valor_select == "saopaulo"){
            fotofundo.src = "./saopaulu.jpg";
        }
        if(valor_select == "curintias"){
            fotofundo.src = "./corinthians.jpeg";
        }
        if(valor_select == "santus"){
            fotofundo.src = "./santus.png";
        }
        if(valor_select == "sem_mundial"){
            fotofundo.src = "palmeirass.jpg";
        }
    }
    else{
        div_mensagem1.innerHTML = 'Falha na autentificação';
    }

} 