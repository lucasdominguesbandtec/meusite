function cadastrar(){
    div_mensagem1.innerHTML = '';
    var valor_email = email.value;
    var valor_senha = senha.value;
    var valor_confirmacao = confirmacao.value;
   
    if(valor_email.indexOf('@') != -1 && valor_senha=='futebol' && valor_confirmacao==valor_senha){ 
        window.location.href = "login.html";
         alert('Usuário autenticado');
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
        if(valor_select == "saopaulo"){
            fotolog.src = "saopaulu.jpg";
        }
        if(valor_select == "curintias"){
            fotolog.src = "corinthians.jpeg";
        }
        if(valor_select == "santus"){
            fotolog.src = "santus.png";
        } 
        if(valor_select == "sem_mundial"){
            fotolog.src = "palmeirass.jpg";
        }
    }
    else{
        mensa.innerHTML = 'Falha na autentificação';
    }
}

function ver() {
    var valor_select = times2.value;
    if(valor_select == "saopaulo"){
        fotomel.src = "saopaulu.jpg";
    }
    if(valor_select == "curintias"){
        fotomel.src = "corinthians.jpeg";
    }
    if(valor_select == "santus"){
        fotomel.src = "santus.png";
    } 
    if(valor_select == "sem_mundial"){
        fotomel.src = "palmeirass.jpg";
    }
}