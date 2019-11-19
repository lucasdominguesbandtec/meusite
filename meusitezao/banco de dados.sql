create database meubd;
use meubd;
create  table TB_Cadastro (
idCadastro int primary key,
Nome varchar(50),
CPF char(14) unique,
Email varchar(50),
Senha char(7)
);
create table TB_Login (
idlogin int primary key,
Email varchar(50),
Senha char(7),
Time_coracao varchar(20)
);
 