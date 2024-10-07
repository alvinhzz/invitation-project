/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import pool from "../database/db";

/**
 * Service Methods
 */
export const getAllComments = async(): Promise<Item[]> => {
    const allComments = await pool.query(`SELECT id, name, comment, createdat FROM comments ORDER BY createdat DESC`)

    return allComments.rows
}

export const postComment = async(newItem: BaseItem): Promise<Item> => {
    const createComment =  await pool.query(`INSERT INTO comments (name, comment) VALUES ($1, $2)`, [newItem.name, newItem.comment])

    return createComment.rows[0]
}