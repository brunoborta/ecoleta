import express, { response } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.post("/points", upload.single("image"), pointsController.create);

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

// {
//     "name": "Mercado do Seu Ze",
//     "email": "seuze@mercado.com.br",
//     "whatsapp": "65161561",
//     "latitude": 132.1,
//     "longitude": 132.1,
//     "city": "Porto Alegre",
//     "uf": "RS",
// 	"items": [1,2,6]
//   }
