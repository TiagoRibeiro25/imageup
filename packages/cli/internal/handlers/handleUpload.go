package handlers

import (
	"encoding/base64"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/TiagoRibeiro25/imageup/internal/api"
	"github.com/TiagoRibeiro25/imageup/internal/utils"
)

// HandleUpload is a function that handles the upload of an image file.
// It expects the file path to be provided as a command-line argument.
// The function opens the image file, reads its contents into a byte slice,
// converts the byte slice to a base64-encoded string, and then uploads
// the image using an API. It prints the result of the upload operation
// to the console and copies the URL of the uploaded image to the clipboard.
func HandleUpload() {
	// Check if the file path was provided
	if len(os.Args) < 3 {
		fmt.Println("Please provide a file path to an image file")
		os.Exit(1)
	}

	// Open the image file
	file, err := os.Open(os.Args[2])
	if err != nil {
		fmt.Println("Error opening file:", err)
		os.Exit(1)
	}
	defer file.Close()

	// Read the image file into a byte slice
	imageData, err := io.ReadAll(file)
	if err != nil {
		fmt.Println("Error reading file:", err)
		os.Exit(1)
	}

	mimeType := http.DetectContentType(imageData)
	base64String := "data:" + mimeType + ";base64," + base64.StdEncoding.EncodeToString(imageData)

	result, err := api.UploadImage(base64String)
	if err != nil {
		fmt.Println("Error uploading image:", err)
		os.Exit(1)
	}

	if result.Success {
		fmt.Println("Image uploaded successfully!")
		fmt.Println("URL:", result.Data.URL)

		utils.CopyToClipboard(result.Data.URL)
	} else {
		fmt.Println("Error uploading image:", result.Message)
		os.Exit(1)
	}
}
