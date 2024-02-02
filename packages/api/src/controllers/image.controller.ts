import { UploadApiResponse } from "cloudinary";
import { log } from "console";
import { Request, Response } from "express";
import { Base64Img } from "../@types/base64";
import config from "../config";
import db from "../database";
import services from "../services";
import utils from "../utils";

async function uploadImage(req: Request, res: Response): Promise<void> {
	const base64Image = req.body.image as Base64Img;
	log(`Image received: ${base64Image.substring(0, 50)}...`);

	try {
		const pictureResult: UploadApiResponse = await services.cloudinary.uploader.upload(
			base64Image,
			{
				folder: config.cloudinary.folderName + "/images",
			},
		);

		const mongoResult = await db.mongo.Image.create({
			cloudinary_id: pictureResult.public_id,
			cloudinary_url: pictureResult.url,
		});

		utils.response.send(res, utils.http.StatusOK, "Image uploaded", {
			url: mongoResult.cloudinary_url,
		});
	} catch (err: any) {
		utils.response.handleError(res, err, __filename);
	}
}

export default { uploadImage };
