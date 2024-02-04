# Image Up

Image Up is a simple CLI tool to upload images to the cloud and get the URL back. Right now, it's only uploading to [cloudinary](https://cloudinary.com/).

There's a folder called `packages` which contains the code for the CLI tool and the API server. The API server is a simple express server written in TypeScript and the CLI tool is written in Go.

## Setup Development Environment

First of all, you need to clone the repository:

```bash
git clone https://github.com/TiagoRibeiro25/imageup.git
```

### API Server

To setup the API server, you first need to install the dependencies:

```bash
cd packages/api
npm install
```

Then you need to have access to a MongoDB database. You can use a local instance or a cloud instance. If you're using a local instance, you can run the following command to start a local instance using docker:

```bash
docker-compose up -d
```

This will start a local instance of MongoDB on port 27017 with the credentials:

- USERNAME: `root`
- PASSWORD: `123`

After that, you need to create a `.env` file in the `packages/api` folder with the content of the `.env.sample` file.

Now you can start the server:

(This will start the server with nodemon, so it will restart the server every time you save a file)

```bash
npm run dev
```

or
  
```bash
npm start
```

### CLI Tool

To setup the CLI tool, you first need to install the dependencies:

```bash
cd packages/cli
go mod download
```

To run the CLI tool, you can use the following command:

```bash
go run ./packages/cli/cmd/imageup/main.go
```

If you want to build the CLI tool, you can use the following command:

```bash
cd packages/cli
go build -o imageup cmd/imageup/main.go
```

This will create an executable file called `imageup` in the `packages/cli` folder.

If you want to use the CLI tool globally, you can move the executable file to a folder that is in your PATH. For example, you can move the file to `/usr/local/bin`:

```bash
sudo mv imageup /usr/local/bin
```

Now you can use the CLI tool from anywhere in your system.

## Usage

The CLI tool has 2 commands: `upload` and `help`.

### Upload

The `upload` command is used to upload an image to the cloud and get the URL back. You can use the following command to upload an image:

```bash
imageup upload <path-to-image>
```

For example:

```bash
imageup upload ~/Pictures/image.jpg
```

This will upload the image to the cloud and return the URL.

### Help

The `help` command is used to get help about the CLI tool. You can use the following command to get help:

```bash
imageup help
```

This will return the help message.

## Contributing

If you want to contribute to this project, you can open a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
