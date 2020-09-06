

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.8.6-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9aaad5da-5fcb-4026-97b4-9d6f628206a3/deploy-status)](https://app.netlify.com/sites/brav/deploys)

# Frontend - Mech 

You can find the deployed project at https://blissful-kilby-128e29.netlify.app.

<br>

## Project Overview



Application where you can manage all your vehicles with maintence and repairs. 
In addition you can also upload posts where other users can see your questions or comments with supporting images and commenting enabled.


### Key Features

1. On-boarding for new users will include sign-in, sign-up, and logout.
2. User settings. A user will be able to change their password, and deactivate their account.
3. Creating cases. A user will be able to create a case based on it's type and relation to court systems. 
3. Manage Cases. A user will be able to add details to a case.
4. Search Mediators. A user will be able to filter mediators.
5. Selecting Mediators. A user will be able to select a mediator and a Sendgrid E-mail will be sent telling the Mediator. 
5. Request to be Mediator. The onboarding for mediators will involve a manual approval process.
7. Receiving payment. A Mediator will be able to connect their bank account with Stripe, and will be able to recieve payment when a bill or invoice is paid.
8. Uploading pictures. A user will be able to upload pictures related to a case.



## Tech Stack

### Front end built using:

#### [React](https://reactjs.org/)

We are using the React library to render the interface and Redux for state management. React is lightweight and unopinionated, so it's perfect for building an MVP.

#### Dependencies

- [Axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and node.js used to send requests to our express backend
- [Firebase](https://www.npmjs.com/package/firebase): Helper used to initalize our firebase authentication system
- [FirebaseImages](https://www.npmjs.com/package/firebase): Storage for images uploads
- [Firebaseui](https://www.npmjs.com/package/firebaseui): Provides simple, customizable UI bindings on top of Firebase SDK to display login and signup forms
- [FontAwesome](https://www.npmjs.com/package/font-awesome): Allows us to use sleek icons on our application
- [Material-Ui](https://www.npmjs.com/package/@material-ui/core): Implement Google's Material Design, allows us to style components with built in styles 
- [Moment](https://www.npmjs.com/package/moment): Lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates, used to format timestamps
- [Node-sass](https://www.npmjs.com/package/node-sass): Allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware
- [React](https://www.npmjs.com/package/react): a JavaScript library for creating user interfaces, used to create the boiler-plate for our application
- [React-dom](https://www.npmjs.com/package/react-dom):
- [React-loader-spinner](https://www.npmjs.com/package/react-dom): Serves as the entry point to the DOM and server renderers for React
- [React-redux](https://www.npmjs.com/package/react-redux): Advanced state management system for React
- [React-router-dom](https://www.npmjs.com/package/react-router-dom): Collection of navigational components that compose declaratively with the application
- [React-scripts](https://www.npmjs.com/package/react-scripts): Configures boiler-plated scripts for react applications
- [React-test-renderer](https://www.npmjs.com/package/react-test-renderer): Provides an experimental React renderer that can be used to render React components to pure JavaScript 
- [Redux](https://www.npmjs.com/package/redux): Redux is a predictable state container for JavaScript applications
- [Redux-logger](https://www.npmjs.com/package/redux-logger): Logs information in the console about redux actions and reducers
- [Redux-thunk](https://www.npmjs.com/package/redux-thunk): Allows us to write action creators that return a function instead of an action
- [Uuid](https://www.npmjs.com/package/uuid): Simple, fast generation of RFC4122 UUIDS.


#### Front end deployed to `Netlify`

#### [Back end](https://github.com/rogercp/mechanic-backend) deployed to `Heroku`

We are using a PostgresSQL database deployed on Heroku. To access the database we are implementing a RESTful API using NodeJS, Express, and knex. Node lets you write JavaScript on both the front-end and back-end, which increases readability and reduced context-switching.

## APIs

#### Authentication API - [Firebase](https://firebase.google.com/docs/auth)

This API is used to authenticate the individuals, mediators and admin to log into the system using their email and password. It handles identity related tasks.


#### Email API - [SendGrid](https://sendgrid.com/docs/)

SendGrid allows us to send secure emails. For example when a user forgets their password and needs to reset or when they need to receive email reminders or notifications.


#### Intergration Testing API - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

This API enables end to end intergration testing. A fake web browser is set up, and Cypress runs the tests live while showing you what happens every step of the way. It can also take screen shots and recordings when unexpected behavior is found. 

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_API_URL - the Backend URL.
    *  REACT_APP_URL - the url used to dynamically pass in callbacks, and redirects


## 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |



## Installation Instructions

Run the following commands to install all dependencies:

```
npm install
```

## Other Scripts

    * build - creates a build of the application.
    * start - starts the production server after a build is created.


# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

