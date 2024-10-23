# Getting Started with Create React App

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Counter App Code Explanation

This code demonstrates how to create a simple counter application using React. The application features a user interface that displays the current number along with buttons to increment, decrement, or reset the number.

### 1. Importing Libraries
```javascript
import { React, useState } from "react";
import "./App.css";
```
- **React**: The core library for building user interfaces in web applications.
- **useState**: A Hook in React that allows you to add state to a functional component.
- **App.css**: The CSS file used for styling the application.

### 2. Defining the Component
```javascript
function App() {
  const [Number, setNumber] = useState(0);
```
- This defines a functional component `App`.
- `useState` is used to create a state variable `Number` with an initial value of 0, and a function `setNumber` to update this state.

### 3. User Interface
```javascript
return (
    <div>
      <div className="title">
        <h1>Counter App</h1>
        <h5>Current number is: {Number}</h5>
      </div>
      <div className="buttons">
        <button onClick={() => setNumber(Number + 1)}>Increment</button>
        <button onClick={() => setNumber(Number - 1)}>Decrement</button>
        <button onClick={() => setNumber(0)}>Reset</button>
      </div>
    </div>
);
```
- **Title**: Displays the main title (`h1`) and the current number (`h5`).
- **Buttons**:
  - **Increment**: Increases the value of `Number` by 1 when clicked.
  - **Decrement**: Decreases the value of `Number` by 1 when clicked.
  - **Reset**: Resets the value of `Number` to 0 when clicked.

### 4. Exporting the Component
```javascript
export default App;
```
- This line exports the `App` component so it can be used in other files, such as `index.js`.

### Summary
This application uses `useState` to manage the current number's state and demonstrates how buttons can be used to interactively update this state. You can use this code as a foundation for building more complex applications using React.
