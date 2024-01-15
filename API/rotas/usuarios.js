const { Router } = require('express');
const router = Router();

const { getTodosUsuarios, getUsuarioPorId, postUsuario, patchUsuario, deleteUsuario} = require('../controllers/usuarios')

router.get('/', getTodosUsuarios);

router.get('/:id', getUsuarioPorId);

router.post('/', postUsuario);

router.patch('/:id', patchUsuario);

router.delete('/:id', deleteUsuario);

module.exports = router;