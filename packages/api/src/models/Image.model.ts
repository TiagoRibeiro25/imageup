import { Mongoose } from "mongoose";

export default (mongoose: Mongoose) => {
	const ImageSchema = new mongoose.Schema({
		cloudinary_id: {
			type: String,
			required: true,
		},
		cloudinary_url: {
			type: String,
			required: true,
		},
		uploaded_at: {
			type: Date,
			default: Date.now,
		},
		date_to_delete: {
			type: Date,
			default: new Date(new Date().setDate(new Date().getDate() + 1)), // 1 day from now
		},
	});

	return mongoose.model("Image", ImageSchema);
};
