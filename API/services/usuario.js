const fs = require('fs');

const path = require('path');
const caminhoAbsoluto = path.resolve(__dirname, '../db/usuarios.json');

function buscaUsuarios() {
  return JSON.parse(fs.readFileSync(caminhoAbsoluto));
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