package handlers

import (
	"fmt"
	"strings"

	"github.com/TiagoRibeiro25/imageup/internal/config"
)

// HandleHelp prints the usage and available commands of the application.
func HandleHelp() {
	appConfig := config.ConfigData

	fmt.Printf("Usage: %s <command>\n", appConfig.App.Name)
	fmt.Println("Available commands:", strings.Join(appConfig.App.AvailableCommands, ", "))
}
