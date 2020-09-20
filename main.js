const usuario = {
    nome: 'Alvaro',
    idade: 18,
    endereco: {
        cidade: 'Cuiaba',
        estado: 'MT'
    }
}

const { nome, idade, endereco: { cidade }} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostarNome({ nome, idade }) {
    console.log(nome, idade);
}

mostarNome(usuario);