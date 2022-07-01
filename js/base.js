const nome = "Gabriel Sanini";
let nome2 = "Gabriel Sanini";

console.log("valor inicial:")
console.log(nome2);

nome2 = "Natália Gallio"; 

console.log("valor alterado:")
console.log(nome2);

function alterarNome(){
    nome2 = "Marta Sanini";
    console.log("valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novonome){
    nome2 = novonome
    console.log("valor alterado recebendo um nome");
    console.log(nome2);
}

recebeEalteraNome("Augusto Sanini")
recebeEalteraNome("Marta Sanini")





//alterarNome()