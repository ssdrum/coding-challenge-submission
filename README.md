# Country Search App

This is a simple web application that allows users to search for countries using a RESTful API built with Express on the backend. The Express app fetches country information from a third-party API and returns it as JSON to be consumed by a React frontend.

## Features

- Search for countries by name.
- Retrieve country information, including name, capital, population, and more.
- Display country information in a React frontend.

## Technologies Used

- Express: A popular Node.js framework for building web applications and APIs.
- Axios: A promise-based HTTP client for making API requests from Node.js.
- Cors: A middleware for Express to handle Cross-Origin Resource Sharing (CORS) and allow cross-origin requests.
- React: A popular JavaScript library for building user interfaces.
- React-loader-spinner: A React library of simple spinners.


## Installation

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project.
3. Create images and run containers by running `make run`
4. Open a web browser and access the React frontend app at `http://localhost:3000` (or the specified port, if changed).

## API Routes

- `GET /search/:country`: Fetches country information for the given country name from the third-party API (`https://restcountries.com/v3.1/name/:country`). The country information is returned as JSON and includes details such as name, capital, population, and more.

## Error Handling

- The Express app includes basic error handling for handling API request errors, such as when the country name is not found or when there is an internal server error. Error responses are returned with appropriate status codes and error messages in JSON format.
- The React frontend app can handle and display error messages from the Express API responses to provide feedback to the user when there is an error in the API request or response.
