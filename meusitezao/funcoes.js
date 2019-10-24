function cadastrar(){
    var valor_email = email.value;
    var valor_senha = senha.value;
    var valor_confirmacao = confirmacao.value;
    var valor_select = times2.value;
    if(valor_email.indexOf('@') != -1 && valor_senha=='futebol' && valor_confirmacao==valor_senha){
         alert('Usuário autenticado');
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

function validar(){
    mensa.innerHTML = '';
    var valor_email1 = email1.value;
    var valor_senha1 = senha1.value;
    if(valor_email1.indexOf('@') != -1 && valor_senha1 =='futebol'){
        alert('Bem vindo');
    }
    else{
        mensa.innerHTML = 'Falha na autentificação';
    }
}