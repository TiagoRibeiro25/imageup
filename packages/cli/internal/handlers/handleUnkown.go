package handlers

import (
	"fmt"
)

// HandleUnknown prints an error message for unknown commands.
// It takes a command string as input and prints the command along with a suggestion to use 'imageup help' for a list of available commands.
func HandleUnknown(command string) {
	fmt.Println("Unknown command:", command)
	fmt.Println("Use 'imageup help' for a list of available commands.")
}
