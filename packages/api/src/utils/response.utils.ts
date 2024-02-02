import { log } from "console";
import { Response } from "express";
import httpUtils from "./http.utils";

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

/**
 * Handles an error by sending a response with a 500 status code and logging the error details.
 * @param response - The response object to send the error response.
 * @param error - The error object that occurred.
 * @param fileAbsolutePath - The absolute path of the file where the error occurred.
 */
function handleError(response: Response, error: Error, fileAbsolutePath: string) {
	// Send the response with a 500 status code
	send(response, httpUtils.StatusInternalServerError, "Something went wrong!", null);

	// Get the file path (relative to the src folder)
	const filePath = fileAbsolutePath.split("/src/").at(-1);

	log(`[${filePath}] Error: ${error.name}`);
	log(`[${filePath}] Message: ${error.message}`);
}

export default { send, handleError };
