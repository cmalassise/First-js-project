// // barra barra para comentar! /* para comentar mais de uma linha

// let teste = (ax + b) = 0; // a e b são constantes, x é a variável. é basicamente esse o conceito de let e const no js

// // função também é similar ao conceito da matemática

// function soma(a, b) { // parênteses recebe os parâmetros
//     return a + b; // essa função retorna o valor de a + b, console.log é mais para checar se tá ok, quando não preciso manipular o resultado
// }

// soma(3, 5);

console.log("Hello world");

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array [i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os números pares são:', evenNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);