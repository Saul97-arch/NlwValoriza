import "reflect-metadata";

import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";

import { router } from "./routes";

import "./database";

import cors from  "cors";

const app = express();

// It is possible to pass an { origin : "127.168.10.10 "} if you want to restrict the acess for just one domain
app.use(cors());

app.use(express.json())

app.use(router);

// Tratando erros com middleware
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json(
            {
                error: err.message
            }
        )
    }

    return response.status(500).json({
        status: "error",
        message: "internal server error"
    })
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));