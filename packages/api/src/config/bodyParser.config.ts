import { OptionsJson } from "body-parser";

export default {
	limit: "15mb",

	// // Verify if the request is JSON
	// verify: (_req: Request, _res: Response, buf: Buffer, encoding: string) => {
	// 	if (buf && buf.length) {
	// 		try {
	// 			JSON.parse(buf.toString(encoding as BufferEncoding));
	// 		} catch (e) {
	// 			throw new Error("Invalid JSON");
	// 		}
	// 	}
	// },
} as OptionsJson;
