// MODO EASY -->

// 1) Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function conversaoPolegadas(x){
    let resultado = x*2.54;
    console.log(resultado);
    return resultado;
}
conversaoPolegadas(2)

// 2) Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converterUrl(texto){
    let link = "http://www." + texto + ".com.br";
    console.log(link);
    return link;
}

converterUrl("digitalhouse")

// 3)Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function expression(text){
    let frase = text + "!"
    console.log(frase);
    return frase;
}

expression("Olá mundo")

//4) Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCachorro(x){
    let idade = x*7;
    console.log("Seu doguinho tem " + idade + " anos em idade de cachorro!")
    return idade;
}

idadeCachorro(9/12);

// 5)Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function valorHora(h){
    let precoHora = Math.round(1589/h);
    console.log("A cada 1 hora trabalhada você recebe aproxiamdamente R$ "+ precoHora)
    return precoHora;
}

valorHora(176)

// 6) Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function imc(nome,altura,peso){

    let calculo = Math.round(peso/((altura/100)**2))
    console.log("Olá " + nome + "! Seu IMC é de: " + calculo);
    return calculo;
}

imc("Lennon",176, 82);
imc("Maruan",172,120)


// MODO MEDIUM --> 

// 7) Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

function converterMaiusculo(string){
    console.log (string.toUpperCase());
    return
}
converterMaiusculo("nao grite")

// 8) Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipoDoParametro(dado){
    return console.log( typeof dado)
}
tipoDoParametro(true);
tipoDoParametro("Lennon");

// 9) Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function circunferencia(r){
    let valorFinal = Math.round(2*r*Math.PI);
    console.log(valorFinal)
    return valorFinal
}

circunferencia(2);
