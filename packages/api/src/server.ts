// Load the environment variables from the .env file (development only)
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

import { log } from "console";
import utils from "./utils";

// Log the environment
log("\nCurrent environment: " + process.env.NODE_ENV);

// Check if all the environment variables are set
if (!utils.envs.validateEnvs()) {
	process.exit(1);
}

import app from "./app";
import db from "./database";

app.listen(process.env.PORT, () => {
	log("Starting the server...");
	log("Connecting to the databases...");

	// Connect to the database
	db.mongo
		.connect()
		.then(() => {
			log("Connected to the database");
			log("Server is running on port: " + process.env.PORT + "\n");
		})
		.catch((_err: unknown) => {
			log("Failed to connect to the database");
			process.exit(1);
		});
});
