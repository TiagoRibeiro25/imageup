import bodyParser from "./bodyParser.config";
import cloudinary from "./cloudinary.config";
import compression from "./compression.config";
import mongoose from "./mongoose.config";
import rateLimit from "./rateLimit.config";

export default { compression, rateLimit, mongoose, bodyParser, cloudinary };
