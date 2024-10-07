/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import pool from "../database/db";

    const jakartaTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour format
    }).format(new Date());

/**
 * Service Methods
 */
export const getAllComments = async(): Promise<Item[]> => {
    const allComments = await pool.query(`SELECT id, name, comment, createdat FROM comments ORDER BY id DESC`)

    return allComments.rows
}

export const postComment = async(newItem: BaseItem): Promise<Item> => {
    const createComment =  await pool.query(`INSERT INTO comments (name, comment, createdAt) VALUES ($1, $2, $3)`, [newItem.name, newItem.comment, jakartaTime])

    return createComment.rows[0]
}