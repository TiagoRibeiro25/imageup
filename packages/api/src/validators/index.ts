import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import utils from "../utils";
import image from "./image";

/**
 * Validates the result of a request.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function to call.
 */
function validateResult(req: Request, res: Response, next: NextFunction): void {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		utils.response.send(res, utils.http.StatusBadRequest, errors.array()[0].msg, null);
		return;
	}

	next();
}

export default { validateResult, image };
