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
        adele.innerHTML += 'Possui:<br> 3 Mundiais<br>3 Libertadores<br>6 Brasileirão<br>21 Paulistões<br> 1 Sul-americana <br> E NUNCA FOI REBAIXADO'
    }
    if(valor_select == "curintias"){
        fotomel.src = "corinthians.jpeg";
        adele.innerHTML += 'Possui:<br> 2 Mundiais<br>1 Libertadores<br>7 Brasileirão<br>30 Paulistões<br>3 Copa do Brasil';
    }
    if(valor_select == "santus"){
        fotomel.src = "santus.png";
        adele.innerHTML += 'Possui:<br> 2 Mundiais<br>3 Libertadores<br>8 Brasileirão<br>22 Paulistões<br>1 Copa do Brasil<br> NUNCA FOI REBAIXADO';
    } 
    if(valor_select == "sem_mundial"){
        fotomel.src = "palmeirass.jpg";
        adele.innerHTML += 'Possui:<br> 1 Mundial<br> 1 Libertadores<br>10 Brasileirão<br>22 Paulistões<br>3 Copa do Brasil';
    }

}

function escalacao(){
    ge.innerHTML = '';
    var valor_select = times2.value;
    if(valor_select == "saopaulo"){
        ge.src = "escalacaosp.jpg";
    }
    if(valor_select == "curintias"){
        ge.src = "escalacaocor.webp";
    }
    if(valor_select == "santus"){
        ge.src = "sampaoli.jpg";
    } 
    if(valor_select == "sem_mundial"){
        ge.src = "escalacaopal.jpg";
    }

}

var Sequelize = require('sequelize')
var sequelize = new Sequelize('meubd','root', 'bandtec', {
  host: "localhost",
  dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!!")
}).catch(function(erro){
  console.log("Falha ao se conectar"+erro)
})