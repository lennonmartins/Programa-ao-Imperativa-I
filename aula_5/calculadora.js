// NIVEL I - EASY

// 1) Crie um arquivo chamado calculadora.js

// 2) Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma delesalizar.

function adicionar(x,y){
    let resultado = x+y;
    return resultado;
}

// 3) Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(x,y){
    let resultado = x-y;
    console.log (x  +" - "+  y + " = "+ resultado);
    return resultado;
}

// 4) Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(x,y){
    let resultado = x*y;
    return resultado;
}

// 5) Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(x,y){
    let resultado = x/y;
    return resultado;;
}

// NIVEL II 

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(2,4));
adicionar(7,4)
subtracao(8,5)
console.log (multiplicacao(2,2))
console.log (divisao(12,2))
divisao(12,0)
divisao(0,2)

// NIVEL III

//1) Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function quadradoDoNumero(x){
    return multiplicacao(x,x);
}
console.log( quadradoDoNumero(9));

// 2) Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(x,y,z){
    resultado = x + adicionar(y,z)
    return divisao(resultado,3)
}
console.log( mediaDeTresNumeros(1,2,3));

//3) Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.

function calculaPorcentagem(x,y){
    return multiplicacao(x,divisao(y,100))
}

console.log(calculaPorcentagem(100,15))
console.log(calculaPorcentagem(60,20))

// 4) Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.

function geradorDePorcentagem(x,y){
    return multiplicacao(100,divisao(x,y))
}

console.log(geradorDePorcentagem( 2,200) + " %")
console.log(geradorDePorcentagem(10,100) + " %")
console.log(geradorDePorcentagem( 12,60) + " %")