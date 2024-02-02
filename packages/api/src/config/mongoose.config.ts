import { ConnectOptions } from "mongoose";

const options: ConnectOptions = {
	authSource: "admin",
	dbName: "imageup",
	compressors: "zlib",
};

export default options;
