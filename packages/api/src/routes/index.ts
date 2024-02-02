import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router: Router = Router();

// Route for uploading an image.
router.post("/", middlewares.validateKey, controllers.image.uploadImage);

export default router;
