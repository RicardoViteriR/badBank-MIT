# MIT - Front End Application Assignment

## Website Functionality
Your website should include the following functionality. Please review the rubric below for specific information on how each element will be graded.

### 1. Navigation Bar
* Includes Create Account, Deposit, Withdraw, All Data, and Home pages
* Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page.
* Styled with Bootstrap
* Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page.
* Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.
### 2. Home Page
* Includes bank title, image, and a welcome message.
* Styled as a Bootstrap card.
### 3. Create Account Page
* Includes a Bootstrap card with a form that has:
* Name input field
* Email address input field
* Password input field
* Create account button
### 4. Create Account Page Functionality

* Create account page should include the following functionality:
* Success message: Upon selecting the create account button the user should see a success message.
* Add Another Account Button: Upon selecting the create account button, the user should see an add another account button.
* Cleared Create Account Form: Upon selecting the create account button, t will open a cleared create account form.
* Name validation: The user receives an alert if the name field is left blank.
* Email validation: The user receives an alert if this field is blank
* Password validation: The user receives an alert if the password is less than 8 characters long.
* Disable submit button if nothing is inputted
### 5. Deposit Page

* Includes a Bootstrap card with a form that has:
* Deposit input field
* Deposit button
* Balance information displays above deposit form on the card
### 6. Deposit Page Functionality

* Deposit page should include the following functionality:
* Updated Balance: When a user deposits, the balance updates.
* Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received.
* Not A Number Alert: User receives an alert if they add something that is not a number.
* Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
* Disable deposit button if nothing is input
### 7. Withdraw Page

* Includes a Bootstrap card with a form that has:
* Withdraw input field
* Withdraw button
* Balance information displays above deposit form on the card
### 8. Withdraw Page Functionality

* Withdraw page should include the following functionality:
* Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance.
* Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed.
* Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
* Not A Number Alert: User receives an alert if they add something that is not a number.
* Disable deposit button if nothing is input
### 9. All Data Page Functionality

* All Data page includes the following functionality:
* Track User Submissions: All user submissions appear on All Data page.
* All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
