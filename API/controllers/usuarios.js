const { buscaUsuarios, buscaUsuarioPorId, insereUsuario, modificaUsuario, deletaUsuarioPorId } = require('../services/usuario');

function getTodosUsuarios(req, res) {
  try {
    const usuario = buscaUsuarios();
    res.send(usuario);
  } catch (error) {
    res.status(500);
    res.send(`Ocorreu um erro ${error.message}`);
  }
}

function getUsuarioPorId(req, res) {
  try {
    const usuario = buscaUsuarioPorId();
    res.send(usuario);
  } catch (error) {
    res.status(500);
    res.send(`Ocorreu um erro ${error.message}`);
  }
}

function postUsuario(req, res) {
  try {
    const usuarioNovo = req.body;
    insereUsuario(usuarioNovo);
    res.status(201);
    res.send('Usuário iserido com sucesso');
  } catch (error) {
    res.status(422);
    res.send('O campo nome é obrigatório');
  }
}

function patchUsuario(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    modificaUsuario(body, id)

    res.status(200)
    res.send('Usuário modificado com sucesso');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteUsuario(req, res) {
  try {
    const id = req.params.id;
    deletaUsuarioPorId(id)
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

module.exports = {
  getTodosUsuarios,
  getUsuarioPorId,
  postUsuario,
  patchUsuario,
  deleteUsuario
}