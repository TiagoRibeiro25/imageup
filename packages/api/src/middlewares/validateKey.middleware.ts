import { NextFunction, Request, Response } from "express";
import utils from "../utils";

/**
 * Middleware function to validate the API key in the request headers.
 * If the key is not valid, it sends an unauthorized response.
 * Otherwise, it calls the next middleware in the chain.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 * @returns A Promise that resolves to void.
 */
export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const key = req.headers["x-api-key"];

	if (key !== process.env.KEY_ACCESS) {
		utils.response.send(res, utils.http.StatusUnauthorized, "Unauthorized", null);
		return;
	}

	next();
};
