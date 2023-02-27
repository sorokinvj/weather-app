# Weather App

Type in a UK city and get a 3 day Weather Forecast from OpenWeather.
The list of UK cities is downloaded from OpenWeather, prepared (minified, cleaned) and included in the repository.

## Run the project

### Add API key

Create .env file in the project root folder and add API key via REACT_APP_WEATHER_API_KEY:

```
REACT_APP_WEATHER_API_KEY=<your API key to the weather api>
```

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will see linting errors in the browser console if any.

## Run tests

### Unit tests`yarn test`

Launches the Jest test runner in the interactive watch mode.

### E2E tests `yarn run cypress open`

Launches Cypress with two test suites - weatherAppSuccess and weatherAppError

## Build the project

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
