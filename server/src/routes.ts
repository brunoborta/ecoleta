import express, { response } from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;

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
