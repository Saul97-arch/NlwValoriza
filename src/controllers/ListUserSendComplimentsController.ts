import { Request, Response, NextFunction, request } from "express";
import { ListUserSendCoplimentsService } from "../services/ListUserSendComplimentsService";


class ListUserSendComplimentsController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const  { user_id } = request; 

        const listUserSendComplimentsService = new ListUserSendCoplimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController };
