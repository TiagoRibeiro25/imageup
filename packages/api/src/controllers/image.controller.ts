import { UploadApiResponse } from "cloudinary";
import { log } from "console";
import { Request, Response } from "express";
import { Base64Img } from "../@types/base64";
import config from "../config";
import db from "../database";
import services from "../services";
import utils from "../utils";

/**
 * Uploads an image to the server, uploads it to Cloudinary, and saves the image's URL and ID to the database.
 *
 * @param req - The request object containing the image data.
 * @param res - The response object used to send the server's response.
 * @returns A Promise that resolves to void.
 */
async function uploadImage(req: Request, res: Response): Promise<void> {
	const base64Image = req.body.image as Base64Img;
	log(`\nImage received: ${base64Image.substring(0, 50)}...`);

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

/**
 * Deletes images from the database that are outdated (where the date_to_delete is less than the current date).
 *
 * @param req - The request object used to get the server's request.
 * @param res - The response object used to send the server's response.
 * @returns A Promise that resolves to void.
 */
async function deleteOutdatedImages(_req: Request, res: Response): Promise<void> {
	try {
		// Fetch all images that are outdated
		const outdatedImages = await db.mongo.Image.find(
			{
				date_to_delete: { $lt: new Date() },
			},
			{
				_id: 1,
				cloudinary_id: 1,
			},
		);

		// Delete the outdated images from Cloudinary
		const cloudinaryResult = await services.cloudinary.api.delete_resources(
			outdatedImages.map((image) => image.cloudinary_id),
		);

		log(`\nDeleted ${cloudinaryResult.deleted} outdated images from Cloudinary`);

		// Delete the outdated images from the database
		const result = await db.mongo.Image.deleteMany({
			date_to_delete: { $lt: new Date() },
		});

		log(`\nDeleted ${result.deletedCount} outdated images`);

		utils.response.send(res, utils.http.StatusOK, "Deleted outdated images", {
			deletedCount: result.deletedCount,
		});
	} catch (err: any) {
		utils.response.handleError(res, err, __filename);
	}
}

export default { uploadImage, deleteOutdatedImages };
