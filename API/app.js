const express = require("express");
const rotaUsuario = require('./rotas/usuarios');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/usuario', rotaUsuario);

const port = 8000;

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})