//const prompt = require("prompt-sync")();


/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”
*/

let num1 = Number(prompt("Ingresa numero:"));
let num2 = Number(prompt("Ingresa otro numero:"));
let num3 = Number(prompt("Ingresa otro numero:"));
let arrayNum= []
arrayNum.push(num1,num2,num3);


function ordenamiento (array) {
    let temp = 0;
    for ( let i = 0; i < array.length-1; i++ ) {
        for ( let j = 0; j < array.length-1; j++ ) {
            if( array[j] > array[j+1] ){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

let may = ordenamiento(arrayNum);
let men = [...may].reverse();

console.log("Array de menor a mayor: " + may);
console.log("Array de mayor a menor: " + men);

