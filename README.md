# Weather App

The app allows users to input a UK city and get a 3 day Weather Forecast from OpenWeather
The list of UK cities is prepared and included in the app

## Run the project

### Add API key

Create .env file on the project root level and add API key via REACT_APP_WEATHER_API_KEY:

```
REACT_APP_WEATHER_API_KEY=5131090e770e50547e63d134d3b19a9a
```

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Run tests

### Unit tests`yarn test`

Launches the Jest test runner in the interactive watch mode.

### E2E tests `yarn run cypress open`

Launches Cypress with two test suites - weatherAppSuccess and weatherAppError

## Build the project

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
