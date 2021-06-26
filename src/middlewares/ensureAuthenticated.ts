import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAutheticated(request: Request, response: Response, next: NextFunction) {
    // Receber token
    const authToken = request.headers.authorization;
    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Desestructuring boyzz
    const [, token] = authToken.split(" ");

    try {
        // Validar se token é válido
        const { sub } = verify(token, "eb1d45febb0f898bf5e70a38aae9cf91") as IPayload;
         
        // Recuperar informações do usuário
        request.user_id = sub;
        return next();
    } catch (e) {
        return response.status(401).end();
    }
    
}
