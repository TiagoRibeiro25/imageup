import mongoose from "mongoose";

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

export default mongoose.model("Image", ImageSchema);
