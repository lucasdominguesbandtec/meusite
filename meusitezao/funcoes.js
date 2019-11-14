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
        window.location.href = "melhor.html";
        alert('Bem vindo');
    }
    else{
        mensa.innerHTML = 'Falha na autentificação';
    }
}

function ver() {
    adele.style.display = 'block';
    adele.innerHTML = '';
    var valor_select = times2.value;
    if(valor_select == "saopaulo"){
        fotomel.src = "po.jpg";
        adele.innerHTML += 'Possui 3 Mundiais<br>3 Libertadores<br>6 Brasileirão<br>22 Paulistões<br> 1 Sul-americana <br> E NUNCA FOI REBAIXADO'
    }
    if(valor_select == "curintias"){
        fotomel.src = "corinthians.jpeg";
        adele.innerHTML += 'Possui 2 Mundiais<br>1 Libertadores<br>7 Brasileirão<br>30 Paulistões<br>3 Copa do Brasil';
    }
    if(valor_select == "santus"){
        fotomel.src = "santus.png";
    } 
    if(valor_select == "sem_mundial"){
        fotomel.src = "palmeirass.jpg";
    }

}