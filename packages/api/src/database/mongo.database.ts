import mongoose, { Mongoose } from "mongoose";
import config from "../config";
// import MessageModel from '../models/Message.model';
// import RoomModel from '../models/Room.model';

const mongo = {
	mongoose,
	connect: (): Promise<Mongoose> => {
		return mongoose.connect(process.env.MONGOOSE_URL, config.mongoose);
	},
	// Room: RoomModel,
	// Message: MessageModel,
};

export default mongo;
