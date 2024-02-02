import mongoose, { Mongoose } from "mongoose";
import config from "../config";
import createImageModel from "../models/Image.model";

export default {
	mongoose,
	connect: (): Promise<Mongoose> => {
		return mongoose.connect(process.env.MONGOOSE_URL, config.mongoose);
	},
	Image: createImageModel(mongoose),
};
