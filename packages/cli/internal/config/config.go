package config

type Config struct {
	App AppConfig
	API APIConfig
}

type AppConfig struct {
	Name              string
	AvailableCommands []string
}

type APIConfig struct {
	URL string
	Key string
}

// ConfigData represents the configuration data for the application.
var ConfigData = Config{
	App: AppConfig{
		Name:              "imageup",
		AvailableCommands: []string{"upload", "help"},
	},

	API: APIConfig{
		URL: "http://localhost:5000/api/v1",
		Key: "1234567890",
	},
}
