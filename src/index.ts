/**
 * Required External Modules
 */
// import * as dotenv from "dotenv";
const dotenv = require("dotenv")
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { itemsRouter } = require("./items/items.router");
const { errorHandler } = require("./middleware/error.middleware");
const { notFoundhandler } = require("./middleware/not-found.middleware");

dotenv.config()

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1)
}

const PORT:number = parseInt(process.env.PORT as string, 10) || 7000

const app = express()

/**
 *  App Configuration
 */

const corsOptions = {
    origin: ["https://secret-02dcff92c442.vercel.app"],
    method: ['GET', 'POST'],
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(helmet())
app.use(cors(corsOptions))
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