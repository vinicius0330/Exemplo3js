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

//METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL

let info ="Programação de ponta";
console.log(info.slice(15,20))
