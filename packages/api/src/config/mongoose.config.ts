import { ConnectOptions } from "mongoose";

const options: ConnectOptions = {
	authSource: "admin",
	auth: {
		username: process.env.MONGOOSE_USERNAME,
		password: process.env.MONGOOSE_PASSWORD,
	},
	dbName: "imageup",
	compressors: "zlib",
};

export default options;
