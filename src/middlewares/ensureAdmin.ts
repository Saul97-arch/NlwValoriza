import { Request, Response, NextFunction } from "express";


export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Verificar se usuário é admin

    const admin = false;

    if (admin) {
        console.log("Entrou no if");
        return next();
    }
    console.log("Não entrou");
    return response.status(401).json({
        error: "Unauthorized",
    });
}