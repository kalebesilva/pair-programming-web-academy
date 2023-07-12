import express from "express";
import { connectToDatabase } from "../services/database.service"
import  favoritesRouter  from "../routes/favorite.router";
import {env} from "../env/env"
import { loadEnv } from '../env/env';

const app = express();

loadEnv();

connectToDatabase()
    .then(() => {
        app.use("/favorite", favoritesRouter);

        app.listen(env.PORT, () => {
            console.log(`Server started at http://localhost:${env.PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });