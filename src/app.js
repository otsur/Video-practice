import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// .use is used to configure middlewares

//configure CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//confiugre express
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//configure cookie-parser
app.use(cookieParser)

export { app }