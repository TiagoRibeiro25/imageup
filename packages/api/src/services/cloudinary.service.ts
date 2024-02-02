import cloudinary from "cloudinary";
import config from "../config";

cloudinary.v2.config(config.cloudinary.options);

export default cloudinary.v2;
