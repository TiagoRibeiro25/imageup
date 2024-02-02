import { ValidationChain, body } from "express-validator";

function validator(): ValidationChain[] {
	return [
		body("image")
			.isString()
			.withMessage("The image must be a string.")
			.bail()
			.isLength({ min: 1 })
			.withMessage("The image must not be empty.")
			.bail(),

		// FIXME: The base64 validation
		// .isBase64()
		// .withMessage("The image must be a base64 string.")
		// .bail()
		// .custom((value: string) => {
		// 	const base64Regex =
		// 		/^data:image\/(?:gif|png|jpeg|jpg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9+/])+={0,2}/;

		// 	if (!base64Regex.test(value)) {
		// 		throw new Error("The image must be a valid base64 string.");
		// 	}
		// })
		// .withMessage("The image must be a valid base64 string with a valid MIME type."),
	];
}

export default validator;
