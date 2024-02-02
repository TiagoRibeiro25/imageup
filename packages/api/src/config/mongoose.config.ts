import { ConnectOptions } from "mongoose";

export default {
	authSource: "admin",
	dbName: "imageup",
	compressors: "zlib",
} as ConnectOptions;
