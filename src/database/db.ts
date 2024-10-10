import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config()
const USERNAME:string = "postgres"
const HOST:string = process.env.HOST as string
const PASSWORD:string = process.env.PASSWORD as string
const DATABASE:string = process.env.DATABASE as string
const PORT:number = parseInt(process.env.DBPORT as string, 10)

const pool = new Pool({
    user: USERNAME,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT
})

export default pool