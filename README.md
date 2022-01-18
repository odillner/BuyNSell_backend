# Getting Started

To install in the dependencies necessary to run the project, run:

### `npm install`

This backend service requires access to several third party API's/services in order to run correctly, these are as follows:

* positionstack Geocoding API (https://positionstack.com/)
* Datafinity Product Data API (https://datafiniti.co/)
* MongoDB Instance (https://www.mongodb.com/)

For instructions on how to establish connection with your instances of these API's/services, see the "Environment variables" section below.

An instance of the backend service contained in this repo as well as latest front end build can be found at the following URL:

### `https://buyn-sell.herokuapp.com/`

## Environment variables

Necessary environment variables should be defined in an .env file in the root of the running directory, an example of what such a file should contain
can be found in the .env.example file. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the project in production mode

### `npm run dev`

Runs the project in development mode

### `npm run lint`

Shows all lint errors

### `npm run lintfix`

Fixes all errors detected by the linter

