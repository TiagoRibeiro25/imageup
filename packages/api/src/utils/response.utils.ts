import { Response } from "express";

/**
 * Send a response to the client.
 * @param response - The response object.
 * @param statusCode - The status code of the response.
 * @param message - The message to be included in the response.
 * @param data - The data to be included in the response.
 */
function send(response: Response, statusCode: number, message: string, data: any) {
	response.status(statusCode).json({
		success: !!(statusCode >= 200 && statusCode <= 299),
		message: message.trim(),
		data: data ?? null,
	});

	response.end();
}

export default { send };
