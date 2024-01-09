/* Faça um pprograma que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois devem estar em dois objetos separdos
*/ 
let pessoa1 = {
    nome: "Gabriel",
    sexo: "M",
    idade: 23,
    profissao: "Suporte em Help-desk"
};

let pessoa2 = {
    nome: "Ana",
    sexo: "F",
    idade: 23,
    profissao: "Estudante"
};

function comparar(pessoa1, pessoa2) {
    if( pessoa1.nome === pessoa2.nome){
        return true;
    } else {
        return false;
    }
}

console.log(comparar(pessoa1, pessoa2));