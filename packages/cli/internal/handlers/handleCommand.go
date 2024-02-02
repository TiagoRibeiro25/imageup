package handlers

// HandleCommand is a function that handles the given command.
// It takes a command string as a parameter and performs the appropriate action based on the command.
// If the command is "upload", it calls the HandleUpload function.
// If the command is "help", it calls the HandleHelp function.
// If the command is not recognized, it calls the HandleUnknown function.
func HandleCommand(command string) {
	switch command {
	case "upload":
		HandleUpload()
	case "help":
		HandleHelp()
	default:
		HandleUnknown(command)
	}
}
