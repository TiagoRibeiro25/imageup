import compression from "compression";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import utils from "./utils";

const app: Application = express(); // Create Express Application

app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(rateLimit(config.rateLimit)); // Enable Rate Limit
app.use(compression(config.compression)); // Enable Compression
app.use(express.json({ limit: "15mb" })); // Enable JSON Parser with 15mb limit (max size of request body)
app.use(morgan("dev")); // Enable Morgan for logging

// app.use("/api/v1", routes);

app.use((_req: Request, res: Response) => {
	utils.response.send(res, utils.http.StatusNotFound, "Not Found", null);
});

export default app;
