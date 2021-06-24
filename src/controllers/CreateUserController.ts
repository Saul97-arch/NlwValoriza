// server -> controler -> service -> ...
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

// Responsabilidade do controller e pegar a requisição e enviar pro service
class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin, password });

        return response.json(user);
    }
}

export { CreateUserController };