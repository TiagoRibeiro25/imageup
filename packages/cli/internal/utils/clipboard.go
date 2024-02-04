package utils

import (
	"fmt"
	"os"

	"github.com/atotto/clipboard"
)

// TODO: Improve the CopyToClipboard function to work with more environments.

// Copy copies the given text to the clipboard.
// It uses the clipboard.WriteAll function to write the text to the clipboard.
// If an error occurs while copying, it prints an error message and exits with a non-zero status code.
// After successful copying, it prints a success message.
func CopyToClipboard(text string) {
	err := clipboard.WriteAll(text)
	if err != nil {
		fmt.Println("Error copying URL to clipboard:", err)
		os.Exit(1)
	}

	fmt.Println("URL copied to clipboard!")
}
