const fs = require('fs');

const path = require('path');
const caminhoAbsoluto = path.resolve(__dirname, '../db/usuarios.json');

function buscaUsuarios() {
  return JSON.parse(fs.readFileSync(caminhoAbsoluto));
}

function buscaUsuarioPorId(id) {
  const listaUsuarios = JSON.parser(fs.readFileSync(caminhoAbsoluto))

  const usuarioFiltrado = listaUsuarios.filter(item => { item.id === id})[0]
  return usuarioFiltrado;
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