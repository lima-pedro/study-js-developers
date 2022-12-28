// TIPO DE DECLARAÇÃO DE STRINGS
const nome = `Pedro`; // TEMPLATE LITERALS 
let Nome = 'Fabrício';
let sobrenome = 'Lima'; // aspas simples
let idade = "18"; // aspas duplas

// typeof() - recebe como parametro uma variavel e retorna o tipo em formato  string
const tipo = typeof(nome); // typeof retorna uma string
console.log(tipo); // log() printa essa string na tela 

// nome = '123';

console.log(typeof(nome));

console.log('nome minusculo ' + nome); // NOME É PASSADO COMO PARAMETRO PRA FUNÇÃO LOG DA CLASSE CONSOLE
// CLASSE.FUNÇÃO();

console.log('nome maiusculo', Nome);

const alunos = []; // vetor / array => notação entre conchetes

const frutas = ['banana', 'maçã'];

const idades = [1, 2, 4];

const aleatorio = ['A', true, 4];

console.log(aleatorio);

const pessoa = { // notação de chave, valores separados por vírgula
    nome: 'Pedro', // CHAVE: VALOR
    idade: 18, // NUMBER (float, inteiro)
    estaTrabalhando: true,
}

// data type JS => String , Number , Array, Object, Boolean

console.log(pessoa.estaTrabalhando)

// NaN = Not a number 


// comentário de linha única 

/**
 * 
 *     comentário de multiplas linhas
 * 
 * 
*/