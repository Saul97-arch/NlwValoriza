import { Request, Response, NextFunction, request } from "express";
import { ListUserRecivedComplimentsService } from "../services/ListUserRecivedComplimentsService";


class ListUserReciviedComplimentsController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const  { user_id } = request; 

        const listUserRecivedComplimentsService = new ListUserRecivedComplimentsService();

        const compliments = await listUserRecivedComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReciviedComplimentsController };
