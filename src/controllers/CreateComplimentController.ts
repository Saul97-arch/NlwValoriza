import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentsService";

class CreateComplimentController {

    async handle(request: Request, response: Response) {
        const { tag_id, user_reciever, message } = request.body;
        const { user_id } = request;
        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender: user_id, 
            user_reciever, 
            message
        });

        return response.json(compliment);
    }
}

export { CreateComplimentController };
