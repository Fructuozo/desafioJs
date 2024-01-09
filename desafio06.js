/* Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
Ex: João e João, true
    Maria e João, False
*/

let nome1 = "João";
let nome2 = "Maria";

function comparar(nome1, nome2) {
    if( nome1 != nome2){
        return true;
    } else {
        return false;
    }
}

console.log(comparar(nome1, nome2));