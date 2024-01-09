/* Faça um pprograma que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois devem estar em um unico objeto
*/ 
let pessoa1 = {
    nome: "Gabriel",
    sobrenome: "Fructuozo",
    sexo: "M",
    idade: 23,
    profissao: "Suporte em Help-desk"
};

function comparar(pessoa1) {
    if( pessoa1.nome === pessoa1.sobrenome){
        return true;
    } else {
        return false;
    }
}

console.log(comparar(pessoa1));