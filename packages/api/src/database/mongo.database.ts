import mongoose, { Mongoose } from "mongoose";
import config from "../config";
import ImageModel from "../models/Image.model";

const mongo = {
	mongoose,
	connect: (): Promise<Mongoose> => {
		return mongoose.connect(process.env.MONGOOSE_URL, config.mongoose);
	},
	Image: ImageModel,
};

export default mongo;
