import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./controllers/error.middleware.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


// Health check route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running" });
});

import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter)

// Multer error
app.use(errorHandler);


export { app };