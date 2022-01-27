// 1) IMC

let nome;
let idade;
let peso;
let altura;
let plano;
let imc; 

nome= "José da Silva";
idade = 27;
peso = 83.5;
altura= 1.70;
plano = true;
imc = Math.round(peso/(altura*altura)); 
console.log(nome+" tem " + idade+ " anos e seu índice de massa corporal é de " + imc)

nome= "Carlos de Souza";
idade = 28;
peso = 80.1;
altura= 1.76;
plano = true;
imc = Math.round(peso/(altura*altura)); 
console.log(nome+" tem " + idade+ " anos e seu índice de massa corporal é de " + imc)

nome= "Aline Ferreira";
idade = 33;
peso = 63.7;
altura= 1.53;
plano = false;
imc = Math.round(peso/(altura*altura)); 
console.log(nome+" tem " + idade+ " anos e seu índice de massa corporal é de " + imc)

nome= "Ana Paula";
idade = 26;
peso = 55.0;
altura= 1.62;
plano = true;
imc = Math.round(peso/(altura*altura)); 
console.log(nome+" tem " + idade+ " anos e seu índice de massa corporal é de " + imc)
