const fs = require('fs');

const path = require('path');
const caminhoAbsoluto = path.resolve(__dirname, '../db/usuarios.json');

function buscaUsuarios() {
  return JSON.parse(fs.readFileSync(caminhoAbsoluto));
}

function buscaUsuarioPorId(id) {
  const listaUsuarios = JSON.parse(fs.readFileSync(caminhoAbsoluto));

  const usuarioFiltrado = listaUsuarios.filter(item => item.id === id )[0]
  return usuarioFiltrado;
}

function insereUsuario(usuarioNovo) {
  const usuarios = JSON.parse(fs.readFileSync(caminhoAbsoluto));
  const usuariosOrdenados = usuarios.slice().sort((a, b) => b.id - a.id);
  const novoID = String(Number(usuariosOrdenados[0].id) + 1);

  const usuarioNovoComID = {id: novoID, ...usuarioNovo};

  const novaListaDeUsuarios = [...usuarios, usuarioNovoComID];
  fs.writeFileSync(caminhoAbsoluto, JSON.stringify(novaListaDeUsuarios));
}

function modificaUsuario(modificacoes, id) {
  let usuariosAtuais = JSON.parse(fs.readFileSync(caminhoAbsoluto));
  const indiceModificado = usuariosAtuais.findIndex(usuario => usuario.id === id);

  const conteudoMudado = {...usuariosAtuais[indiceModificado], ...modificacoes}

  usuariosAtuais[indiceModificado] = conteudoMudado;
  fs.writeFileSync(caminhoAbsoluto, JSON.stringify(usuariosAtuais));
}

function deletaUsuarioPorId(id) {
  let usuariosAtuais = JSON.parse(fs.readFileSync(caminhoAbsoluto));
  const indiceDeleta = usuariosAtuais.findIndex(usuario => usuario.id === id);
  usuariosAtuais.splice(indiceDeleta, 1);
  fs.writeFileSync(caminhoAbsoluto, JSON.stringify(usuariosAtuais))
}

module.exports = {
  buscaUsuarios,
  buscaUsuarioPorId,
  insereUsuario,
  modificaUsuario,
  deletaUsuarioPorId
}