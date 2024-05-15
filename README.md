## Workflow Status
[![Node.js CI](https://github.com/SwapnilAryan97/react_portfolio/actions/workflows/node.js.yml/badge.svg)](https://github.com/SwapnilAryan97/react_portfolio/actions/workflows/node.js.yml)

[![Production Workflow](https://github.com/SwapnilAryan97/react_portfolio/actions/workflows/prod.yml/badge.svg)](https://github.com/SwapnilAryan97/react_portfolio/actions/workflows/prod.yml)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# Docker 
build

`docker build -t <username>/<appname>:<tag> . `

`docker ps`

`docker images`


## FAQ

### What does the "unsupported architecture arm64" error mean when pushing a Docker image to Heroku?

The error message "unsupported architecture arm64" suggests that you're trying to push a Docker image built for the ARM64 architecture to Heroku, but Heroku currently only supports the AMD64 architecture for Docker images.

To resolve this issue, you need to build your Docker image specifically for the AMD64 architecture. If you're using a machine with an ARM64 processor (like the M1 Macs), you can use Docker's buildx tool to build multi-architecture images.

Here's how you can do it:

1. **Create a new builder instance**

    ```bash
    docker buildx create --name mybuilder
    ```

2. **Switch to the new builder instance**

    ```bash
    docker buildx use mybuilder
    ```

3. **Start up the builder instance**

    ```bash
    docker buildx inspect --bootstrap
    ```

4. **Build the image**

    ```bash
    docker buildx build --platform linux/amd64 -t <username>/<appname>:<tag> . --load
    ```
    This command tells Docker to build the image for the `linux/amd64` platform.

    After building the image, you can push it to Heroku as before. Remember to tag the image correctly for Heroku before pushing it.

5. **Push and Deploy**

    ```
    docker push registry.heroku.com/<appname>/web
    ```

    ```
    heroku container:release web --app <appname>
    ```
