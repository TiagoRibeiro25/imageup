import { log } from "console";
import VALID_ENVS from "../json/envs.json";

/**
 * Validates the required environment variables.
 * @returns {boolean} Returns true if all required environment variables are present, otherwise false.
 */
function validateEnvs(): boolean {
	const missingEnvs: string[] = VALID_ENVS.filter((env: string) => !process.env[env]);

	if (missingEnvs.length) {
		log(`Missing environment variables: ${missingEnvs.join(", ")}`);
		return false;
	}

	return true;
}

export default { validateEnvs };
