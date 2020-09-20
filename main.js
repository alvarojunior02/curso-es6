const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];   

// map
const idades = usuarios.map(item => item.idade);

console.log(idades);

//filter
const usuariosFilter = usuarios.filter(item => {
    return item.empresa === 'Rocketseat' && item.idade > 18
})

console.log(usuariosFilter);

// find
const usuarioFind = usuarios.find(item => item.empresa === 'Google')

console.log(usuarioFind);

// map e filter
const usuarios2 = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
console.log(usuarios2);