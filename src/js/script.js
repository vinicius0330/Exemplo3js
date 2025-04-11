// Declaração e variaveis

var nome ="Fiap";
console.log(nome)

let idade =18;
console.log(idade)

const sobrenome ="Fiapinho";
console.log(sobrenome)

// undefined

let exemplo;
console.log(exemplo)

// nula

let exemplo1 =null;
console.log(exemplo1)

// tipos de variaveis

let ex1 ="Fiap";
console.log(typeof ex1)

let ex2 =22;
console.log(typeof ex2)

let ex3 =true;
console.log(typeof ex3)

let ex4 ={};
console.log(typeof ex4)

let ex5 =[];
console.log(typeof ex5)

// CONVERSÕES

// FLOAT -> STRING

let numfloat = 123.456
console.log(numfloat.toString())

//STRING -> FLOAT

let numString ="12.678"
console.log(parseFloat(numString))

// INT -> STRING

let numInt = 12
console.log(numInt.toString())

// STRING -> INT

let numString1 ="120"
console.log(parseInt(numString1))

// METODOS

// METODO LENGTH - VERIFICA O TAMANHO DA STRING

let frase ="O mundo da tecnologia";
console.log(frase.length)

// METODO indexof/lastindexof - RETORNA UM TRECHO DO SEU CODIGO

let texto ="Programação Sustentável";
console.log(texto.indexOf("ão"))

// METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL

let info ="Programação de ponta";
console.log(info.slice(15,20))

// OPERADORES ARITMÉTICOS

const a=10;
const b=20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// OPERADORES LÓGICOS

const c=20;
const d=30;

console.log(c < d);
console.log(c > d && c > 10);
console.log(c > d || d > c);
console.log(c == d || d <= c);

// OPERADORES DE COMPARAÇÃO

const e=10;
const f=30;

console.log(e == f); //comparação
console.log(e === f); //comparação e tipo
console.log(e != f); 

// CONDICIONAL
//If
if(true){
    console.log("é verdadeiro")
}

let exemplo2 = 1
if(exemplo2 == 1){
    console.log("está correto")
}
//If/else
let nome1 ="Fiap"
if(nome1 == "Fiap"){
    console.log("Nome correto")
    // document.write("Nome certo")
}
else{
    console.log("Nome errado")
    // document.write("Nome errado")
}
//If encadeado ou alinhado

let idade1 =14;
if(idade1 <=14){
    console.log("Não pode entrar é menor")
}
else if(idade1 >14 && idade1 <=18){
    console.log("pode entrar e curtir")
}
else if(idade1 >18 && idade1 <=50){
    console.log("Perigo seus pais estão na balada")
}
else{
    console.log("você deve ficar em casa vendo netflix")
}
// switch case
let time ="Corinthians"

switch(time){
    case "Corinthians":
        console.log("Melhor time")
        break;
    case "São Paulo":
        console.log("É bosta")
        break;
    case "Palmeiras":
        console.log("Sem mundial")
        break;
    default:
        console.log("....(prantos)")
}
//Ternario
let valor=100;
let resultado = valor ==100 ? "Valor Certo": "Valor Errado";    // ? -> If, : -> Else
console.log(resultado);

let nota=100;
let resultado1 = nota >=65 ? "Passou!": "Reprovado!";
console.log(resultado1)