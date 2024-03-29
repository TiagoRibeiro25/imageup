import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import validators from "../validators";

const router: Router = Router();

// Route for uploading an image.
router.post(
	"/",
	middlewares.validateKey,
	validators.image.upload(),
	validators.validateResult,
	controllers.image.uploadImage,
);

// Route for deleting outdated images.
router.delete("/", middlewares.validateKey, controllers.image.deleteOutdatedImages);

export default router;
