declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		PORT: string;
		KEY_ACCESS: string;
		MONGOOSE_URL: string;
	}
}
