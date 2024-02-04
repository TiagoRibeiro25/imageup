package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/TiagoRibeiro25/imageup/internal/config"
)

type UploadResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Data    struct {
		URL string `json:"url"`
	} `json:"data"`
}

// UploadImage sends a POST request to the API with the provided base64 string as the image data.
// It returns an UploadResponse and an error if any.
func UploadImage(base64String string) (UploadResponse, error) {
	// Create a POST request with the base64 string in the body
	reqBody := map[string]string{"image": base64String}
	reqJSON, err := json.Marshal(reqBody)
	if err != nil {
		return UploadResponse{}, err
	}

	// Create the request
	req, err := http.NewRequest("POST", config.ConfigData.API.URL, bytes.NewBuffer(reqJSON))
	if err != nil {
		return UploadResponse{}, err
	}

	// Set the "Content-Type" header
	req.Header.Set("Content-Type", "application/json")

	// Set the "x-api-key" header
	req.Header.Set("x-api-key", config.ConfigData.API.Key)

	fmt.Println("Uploading image to the server...")

	// Make the HTTP request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return UploadResponse{}, err
	}
	defer resp.Body.Close()

	// Check the response status
	if resp.StatusCode != http.StatusOK {
		return UploadResponse{}, fmt.Errorf("unexpected response status: %s", resp.Status)
	}

	// Read and print the response body
	respData, err := io.ReadAll(resp.Body)
	if err != nil {
		return UploadResponse{}, err
	}

	// Unmarshal the response body into an UploadResponse struct
	var uploadResponse UploadResponse
	err = json.Unmarshal(respData, &uploadResponse)
	if err != nil {
		return UploadResponse{}, err
	}

	return uploadResponse, nil
}
