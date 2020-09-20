// REST

console.log('------ REST ------');

const usuario = {
    nome: 'Alvaro',
    idade: 18,
    empresa: 'IFMT'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD

console.log('------ SPREAD ------');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario1 = {
    nome: 'Alvaro',
    idade: 18,
    empresa: 'IFMT',
}

const usuario2 = { ...usuario1, nome: 'Alvaro Junior'};

console.log(usuario2);