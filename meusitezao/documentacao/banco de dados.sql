create database meubd;
use meubd;
create  table TB_Cadastro (
idCadastro int primary key auto_increment,
Nome varchar(50),
CPF char(14) unique,
Email varchar(50),
Senha char(7)
);


 