import express from "express";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";

connectDB();

const app = express();

// Leer datos de formularios
app.use(express.json());

app.use("/", router);

export default app;
