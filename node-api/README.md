# [Headless CMS with ExpressJS API FREE]((https://headless-cms-with-express-js-api.creative-tim.com/?ref=hceja-readme))

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/ct-headless-cms-with-laravel-json-api.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-headless-cms-with-laravel-json-api/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/ct-headless-cms-with-laravel-json-api/ct-headless-cms-with-laravel-json-api.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-headless-cms-with-laravel-json-api/issues?q=is%3Aissue+is%3Aclosed)

![Product Image](https://s3.amazonaws.com/creativetim_bucket/products/690/original/headlesscms-expressjs-pro.jpg?1664798078)

Headless CMS with ExpressJS API Free is a backend built with the most popular Node.js framework.

# Download
Download the .zip file from the Creative Tim site and extract it. what is the link?

# Node API Setup

## Introduction

Express is a minimal and flexible framework Node.js web application. Express offers core features for creating an API:
- allows setting up a middleware for responding to HTTP requests
- helps with routing for different HTTP methods
- dynamically rendering HTML pages

[Click here to go to the Express docs](https://expressjs.com/)

For the data management was used MongoDB, a non-relational database that provides support for JSON-like storage.

[Click here to go to the MongoDB docs](https://www.mongodb.com/docs/)

## Prerequisites

For your local development you need to have `Node.js` and `npm` version 16 or above installed:
- For Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows
- For Linux: https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
- For Mac: https://treehouse.github.io/installation-guides/mac/node-mac.html

## Project Installation

To install the project you need to have version 16 of Node.js and npm version 8. The first step is to run `npm install` command. Next you need to copy the `.env.example` file and name it `.env`. There are the variables for the database and the URLs:
- DB_LINK="mongodb-link-to-connect"

- JWT_SECRET="token"

- APP_URL_CLIENT= with the default value of http://localhost:3000
- APP_URL_API= with the default value of http://localhost:8080

- add your mailtrap credentials in the MAILTRAP_USER and MAILTRAP_PASSWORD

## Usage

For a token-based authentication `passport` and `passport-jwt` modules were used. Also for managing the database, `mongoose` helped. Two scripts seeding and clearing the collections and documents are found in the `/src/mongo`. The FREE version has a single table of `users` with a default user `admin@jsonapi.com` with the password `secret`.

To migrate and seed the tables the commands are:
- npm run seed
- npm run clear

To start the API you need to run the command `npm run start:dev`. For example, your React project can use it by adding in your package.json `"proxy": "http://localhost:8080/"` if in your local development. Check your .env variables to match your URLs.

It offers endpoint for login with the default users or it can register a new one. In the case of forgetting the password, the user can request a reset passsword and reset it. For getting and updating the user's profile it uses a Profile API.

Node API offers endpoints for common CRUD functionalities:
- Authentication API: login, logout, forget passwors and reset password
- Profile API: get profile, update profile

## Table of Contents

* [Versions](#versions)
* [Documentation](#documentation)
* [Dashboards built with Headless CMS with ExpressJS API PRO](#dashboards-built-with-headless-cms-with-expressjs-api-pro)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/laravel_logo.png" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/nodejs-logo.jpg" height="75" />](#)

## Documentation
The documentation for the Node API is hosted at our [here](https://documenter.getpostman.com/view/8138626/Uze1virp).

## Resources
- Download Page: <https://>
- Documentation: <https://documenter.getpostman.com/view/8138626/Uze1virp>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://)

## Dashboards built with Node API
| Material Dashboard 2 React|
| --- |
| [![Material Dashboard 2 React Node JS](https://s3.amazonaws.com/creativetim_bucket/products/689/original/react-material-dashboard-pro-nodejs.jpg?1664790326)](https://material-dashboard-react-node.creative-tim.com/auth/login?ref=hceja-readme)


## Reporting Issues

We use GitHub Issues as the official bug tracker for the Node API PRO. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Node API PRO. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=hceja-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright Creative Tim (https://www.creative-tim.com/?ref=hceja-readme)
- Creative Tim License (https://www.creative-tim.com/license).


## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=hceja-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=hceja-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=hceja-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=hceja-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=hceja-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles??ref=hceja-readme)

## Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim?ref=hceja-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=hceja-readme>

Dribbble: <https://dribbble.com/creativetim?ref=hceja-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=hceja-readme>


### Updivision:

Twitter: <https://twitter.com/updivision?ref=hceja-readme>

Facebook: <https://www.facebook.com/updivision?ref=hceja-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=hceja-readme>

Updivision Blog: <https://updivision.com/blog/?ref=hceja-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=hceja-readme)
- [UPDIVISION](https://updivision.com)
