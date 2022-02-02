# JWT Authentication

This repository holds jwt token based authentication server written in typescript using node, express and containerized with docker.

## Tech

- [NodeJS](https://nodejs.org/en/) - JavaScript runtime environment.
- [Express](https://expressjs.com/) - Web framework for NodeJS.
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language.
- [MongoDB](https://www.mongodb.com/) - Document-oriented database.
- [Docker](https://www.docker.com/) - Open source containerization platform.
- [Yup](https://github.com/jquense/yup) - Schema validation.

## Features

- Request payload validation with yup.
- Use of express middlewares.
- Basic CRUD operations.
- Generate auth token and refresh token.
- Proper error handling with a seperate module.

## Pre configurations

In order for the server to start there are few environment variables that needs to be given via a dotenv file. Create a `.env` file in the root of the cloned repository and add following environment variables.

- PORT - Port to run server.
- DATABASE_URL_DEV - MongoDB Database Connection string.
- DATABASE - Name of the database.
- JWT_SECRET_KEY - Jwt secret key.

## Installation

Clone repository.

```sh
https://github.com/nipunravisara/jwt-auth.git
```

By default, the Docker will expose port 4000 so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image. This will create the dillinger image and pull in the necessary dependencies.

```sh
docker-compose build
```

Once done, run the Docker image

```sh
docker-compose up
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[node.js]: http://nodejs.org
[express]: http://expressjs.com
[typescript]: https://www.typescriptlang.org/
[mongodb]: https://www.mongodb.com/
[docker]: https://www.docker.com/
[yup]: https://github.com/jquense/yup
