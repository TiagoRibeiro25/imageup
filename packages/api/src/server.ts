import { log } from "console";
import app from "./app";
import db from "./database";
import utils from "./utils";

// Log the environment
log("Current environment: " + process.env.NODE_ENV);

// Load the environment variables from the .env file (development only)
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

// Check if all the environment variables are set
if (!utils.envs.validateEnvs()) {
	process.exit(1);
}

app.listen(process.env.PORT, () => {
	log("Starting the server...");
	log("Connecting to the databases...");

	// Connect to the database
	db.mongo
		.connect()
		.then(() => {
			log("Connected to the database");
			log("Server is running on port: " + process.env.PORT);
		})
		.catch((_err: unknown) => {
			log("Failed to connect to the database");
			process.exit(1);
		});
});
