declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		PORT: string;
		KEY_ACCESS: string;
		MONGOOSE_URL: string;
		CLOUDINARY_API_KEY: string;
		CLOUDINARY_API_SECRET: string;
		CLOUDINARY_CLOUD_NAME: string;
	}
}
