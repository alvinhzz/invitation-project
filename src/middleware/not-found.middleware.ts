import { Request, Response, NextFunction } from "express";

export const notFoundhandler = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const message = "Belum ada resourcenya"

    response.status(404).send(message)
}