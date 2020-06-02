import express from "express";

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação existente no backend

// POST http://localhost:333/users = Criar um usuário
// GET http://localhost:333/users = Listar usuários
// GET http://localhost:333/users/5 = Buscar dados do usuario com Id 5

// Request param: Parametros que vem na propria rota que identificam um recurso
// Query param: Parametros que vem na propria rota opcionais para filtros, paginação, etc
// Request body: Parametros para criação/atualização de informações

const users = ["Diego", "Cleiton", "Robson", "Bruno"];

app.get("/users", (req, res) => {
  console.log("Listagem de Usuarios");

  const search = req.query.search;
  const filteredUsers = search
    ? users.filter((user) => user.includes(String(search)))
    : users;
  console.log(users, filteredUsers);
  res.json(filteredUsers);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("Buscar usuário");

  res.json(users[id]);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const user = {
    name,
    email,
  };

  return res.json(user);
});
app.listen(3333);
