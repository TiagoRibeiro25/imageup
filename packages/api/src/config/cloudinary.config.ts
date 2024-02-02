import { ConfigOptions } from "cloudinary";

export default {
	folderName: `imageup/${process.env.NODE_ENV === "production" ? "prod" : "dev"}`,
	options: {
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	} as ConfigOptions,
};
