import { ValidationChain, body } from "express-validator";

function validator(): ValidationChain[] {
	return [
		body("image")
			.isString()
			.withMessage("The image must be a string.")
			.bail()
			.isLength({ min: 1 })
			.withMessage("The image must not be empty.")
			.bail()
			.isBase64()
			.withMessage("The image must be a base64 string.")
			.bail()
			.custom((value: string) => {
				if (!/^data:image\/(png|jpg|jpeg|bmp|webp);base64,/.test(value)) {
					throw new Error("The image must be a valid base64 string.");
				}
			})
			.withMessage("The image must be a valid base64 string with a valid MIME type."),
	];
}

export default validator;
