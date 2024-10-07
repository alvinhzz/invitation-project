/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundhandler } from "./middleware/not-found.middleware";

dotenv.config()

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1)
}

const PORT:number = parseInt(process.env.PORT as string, 10)

const app = express()

/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api/guest/comment", itemsRouter)

app.use(errorHandler)
app.use(notFoundhandler)

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})