'use strict';
var realinesync = require("readline-sync");
var atendentes = 100;
var evento = ["Tecnologia", "Quimica", "Natureza"];
var palestrantes = ["Carlos", "Mariana", "Otavio"];
const DataEvento = ('2021-10-31');
let DataAtual = ('2021-9-28');
let SelecEvento = realinesync.question("Selecione o evento e palestrante: ");
    if(DataEvento<DataAtual) {}
    else{
        console.log("Evento ja ocorreu");
    return};
let Nome = realinesync.question("Seu nome: ");  
    if(atendentes<100){} 
    else{
        console.log("Evento Lotado"); 
        return};
let Idade = realinesync.question("Sua idade: ");
    if(Idade>18){} 
    else {
        console.log("Evento apenas para maiores de 18.");         
       return }; 
console.log("Cadastro Concluido!");

