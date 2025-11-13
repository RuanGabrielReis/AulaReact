create database aulabd;
use aulabd;

create table aluno(

codigo int key auto_increment,
nome varchar(50),
cidade varchar(50),
estado varchar(2)

);

insert into aluno (nome, cidade, estado) values ("Victor", "Mococa", "SP");

select * from aluno;
