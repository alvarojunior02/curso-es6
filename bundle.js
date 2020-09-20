"use strict";

var usuario = {
  nome: 'Alvaro',
  idade: 18,
  endereco: {
    cidade: 'Cuiaba',
    estado: 'MT'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostarNome(usuario);
