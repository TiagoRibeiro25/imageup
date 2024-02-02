package main

import (
	"os"

	"github.com/TiagoRibeiro25/imageup/internal/handlers"
)

func main() {
	// If there are no arguments, show the help message and exit.
	if len(os.Args) < 2 {
		handlers.HandleHelp()
		os.Exit(1)
	}

	handlers.HandleCommand(os.Args[1])
	os.Exit(0)
}
