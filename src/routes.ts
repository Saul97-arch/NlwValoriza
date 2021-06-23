import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// ensureAdmin passado como middleware na rota, pode ir adicionando o quanto quiser antes da requisição
router.post("/users",createUserController.handle); 
router.post("/tags", ensureAdmin ,createTagController.handle)

export { router };
