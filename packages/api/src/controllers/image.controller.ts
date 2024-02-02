import { Request, Response } from "express";
import utils from "../utils";

async function uploadImage(req: Request, res: Response): Promise<void> {
	try {
		utils.response.send(res, utils.http.StatusOK, "Image uploaded", null);
	} catch (error: any) {
		utils.response.handleError(res, error, __filename);
	}
}

export default { uploadImage };
