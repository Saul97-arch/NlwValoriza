import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAutheticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReciviedComplimentsController } from "./controllers/ListUserReciviedControllers";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserRecieveComplimentsController = new ListUserReciviedComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUsersController();
// ensureAdmin passado como middleware na rota, pode ir adicionando o quanto quiser antes da requisição

router.post("/users", createUserController.handle);
router.post("/tags", ensureAutheticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAutheticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAutheticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/recieve", ensureAutheticated, listUserRecieveComplimentsController.handle)
router.get("/tags", ensureAutheticated ,listTagsController.handle);
router.get("/users", ensureAutheticated ,listUserController.handle)

export { router };
