import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router definition
 */

export const itemsRouter = express.Router()

/**
 * Controller definition
 */

itemsRouter.get('/', async(req: Request, res:Response) => {
    try {
        const allComments: Item[] = await ItemService.getAllComments()

        const commentsWithLocalTime = allComments.map(comment => {
            const utcDate = new Date(comment.createdat);
            return {
                ...comment,
                createdat: utcDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }) // Format to local time
            };
        });

        res.status(200).json(commentsWithLocalTime)
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

itemsRouter.post('/', async(req: Request, res:Response) => {
    try {
        const comment: BaseItem = req.body
        await ItemService.postComment(comment)

        res.status(200).json({"status" : "Oke Gan"})
    } catch (err: any) {
        res.status(500).json(err.message)
    }
})