const fs = require('fs');

function buscaUsuarios() {
  return JSON.parse(fs.readFileSync('./usuarios.json'));
}

function buscaUsuarioPorId() {
  return 'Usuário';
}

function insereUsuario(usuarioNovo) {
  return '';
}

function modificaUsuario(modificacoes, id) {
  return '';
}

function deletaUsuarioPorId(id) {
  return '';
}

module.exports = {
  buscaUsuarios,
  buscaUsuarioPorId,
  insereUsuario,
  modificaUsuario,
  deletaUsuarioPorId
}