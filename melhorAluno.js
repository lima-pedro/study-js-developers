//  0 , 1 , 2 indíce do array;
// SIMULANDO ENTRADA DE DADOS
const alunos  = [
    { nome: 'Pedro', nota: 9.8 }, // 0
    { nome: 'Godofredo', nota: 11.1 }, // 1
    { nome: 'Fabrício', nota: 9.9 }, // 2
    { nome: 'Wesley', nota: 1}, // 3
]

// propriedade array LENGTH

console.log('QTDE ALUNOS', alunos.length); // 4 

// let qtdeAlunos = 4; // hard coded 
let qtdeAlunos = alunos.length; // NUMBER
let controle = qtdeAlunos;

let nomeMelhor; // declaração 
// UNDEFINED;

// ESCOPO DE DECLARAÇÃO 

// let notaMelhor = 0;  // declaração + inicialização

let notaMelhor;
notaMelhor = 0;

while (controle > 0) {

    console.log('aluno na posição X', controle -1 );

    let posicaoAtual = controle - 1; // QUERO SABER O INDICE ATUAL

    console.log('condição', notaMelhor < posicaoAtual)
    console.log('notaMelhor', notaMelhor);

    // if ('Pedro' === alunos[posicaoAtual].nome) { comprarando nome da posição atual com a string "Pedro"
    if (notaMelhor < alunos[posicaoAtual].nota) {
        nomeMelhor = alunos[posicaoAtual].nome;
        notaMelhor = alunos[posicaoAtual].nota;
    }

    controle = controle - 1;
    // qtdeAlunos -= 1;
    // qtdeAlunos--;
}

// console.log('SEGUNDO', alunos[1]); // acessando o aluno pelo indíce (index)
console.log('Melhor aluno ' + nomeMelhor + ' com rendimento ' + notaMelhor);
console.log('Quantidade e alunos', qtdeAlunos);
console.log('Controle', controle);
console.log('Tamanho do array', alunos.length);