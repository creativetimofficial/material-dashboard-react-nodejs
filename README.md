# [Argon Dashboard Nodejs](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Argon%20Dashboard%20Node.js%20is%20a%20Free%20Frontend%20Preset%20for%20Node.js%20%E2%9D%A4%EF%B8%8F%0Ahttps%3A//argon-dashboard-nodejs.creative-tim.com/%20%23bootstrap%20%23argon%20%23design%20%23dashboard%20%23nodejs%20%23freebie%20%20via%20%40CreativeTim)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/argon-dashboard-nodejs.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-dashboard-nodejs/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/argon-dashboard-nodejs.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-dashboard-nodejs/issues?q=is%3Aissue+is%3Aclosed)

![Product Image](https://s3.amazonaws.com/creativetim_bucket/products/148/original/opt_ad_node_thumbnail.jpg)

Start your development with a Bootstrap 4 Admin Dashboard built for Node.js framework, the newest go-to technology for top companies. [Creative Tim](https://www.creative-tim.com/) partnered with [Udevoffice](https://udevoffice.com/) to provide a fully coded “frontend + backend” solution for you. It features a huge number of components that can help you create amazing websites and brings with itself innumerable advantages: lightweight, fast, scalable and modern way to execute your next top app.

**FULLY CODED COMPONENTS**

Argon Dashboard Node is built with over frontend 100 individual components, giving you the freedom of choosing and combining. All components can take variations in colour, that you can easily modify using SASS files.
You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. This Dashboard is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.
Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.
View all components [here](https://argon-dashboard-nodejs.creative-tim.com/docs/components/alerts?ref=adn-readme)

**COMPLEX DOCUMENTATION**

Each element is well presented in a very complex documentation. You can check the components [here](https://argon-dashboard-nodejs.creative-tim.com/docs/components/alerts?ref=adn-readme) and the foundation [here](https://argon-dashboard-nodejs.creative-tim.com/docs/foundation/colors?ref=adn-readme)

**Example Pages**

If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.
View example pages [here](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme)


## Installation

1. You need `Node.js` (at least 10.x version) installed on your machine, if you don't have it, you should install it - download [link](https://nodejs.org/en/download/)
2. [Clone the project from github](https://github.com/creativetimofficial/argon-dashboard-nodejs) or [download the archive](https://github.com/creativetimofficial/argon-dashboard-nodejs)
3. `cd` to your downloaded Argon app
4. Install necessary dependencies:
    - **Via node `npm` package manager** - Run `npm install` on the project root
    - **Via `yarn` package manager** - Run `yarn install` on the project root

## Configuration for PostgreSQL database and Redis data structure store

##### Via Docker

1. Install **Docker** on your machine
2. Run `docker-compose up -d` in a terminal on the project root. This will start 3 containers:
    - database(PostgreSQL) container;
    - redis container - required for session management;
    - haproxy container - required only for a staging/production setup;

##### Via another chosen solution.

1. Install your **PostgreSQL** database
2. Install your **Redis** server
3. Change connection configuration, from your root `cd` to `env-files` folder and change the following configurations with your own:

###### **For PostgreSQL connection:**
1. Database connection via URL
```bash
DATABASE_URL=http://creativeTim:creativeTim@127.0.0.1:5432/creativeTim
# Example: DATABASE_URL=http://<user>:<password>@<host>/<database_name>
```
2. Database connection via credentials
```bash
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=creativeTim
DATABASE_USER=creativeTim
DATABASE_PASSWORD=creativeTim
```

######  **For Redis connection:**
1. REDIS connection via URL
```bash
REDIS_URL=redis://:@127.0.0.1:6379
# Example: redis://:<password>@<host>:<port>
```
2. REDIS connection via credentials
```bash
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
```

## Migrations and seeds

1. For database tables structure, in the project root run: `npm run knex migrate:latest` or `yarn knex migrate:latest` if you are using `yarn` as the default package manager
2. To create a default user, run: `npm run knex seed:run` or `yarn knex seed:run` if you are using `yarn` as the default package manager

## Run the application

1. For starting the application, the following script (defined in `package.json` under `scripts`) must be called:
    - via **npm**: `npm run start` or `npm run dev` for starting the development environment, which has livereload enabled;
    - via **yarn**: `yarn start` or `yarn dev` for starting the development environment, which has livereload enabled;


## Usage

Register a user or login using **admin@argon.com**:**secret** and start testing the preset (make sure to run the migrations and seeds for these credentials to be available).

Besides the dashboard and the auth pages this preset also has an edit profile page.
**NOTE**: _Keep in mind that all available features can be viewed once you login using the credentials provided above or by registering your own user._

## Features

In order to see the available features `cd` into `features` folder, and you will then find a folder for each of the available features, mostly each folder containing:

- A `routes.js` file that usually contains the `GET` and `POST` requests, for example, the profile router looks like this:

```javascript
const { wrap } = require('async-middleware');

const requestBodyValidation = require('./commands/verify-request-body');
const updateUserInfo = require('./commands/update-user-info');
const { loadPage } = require('./commands/profile');

module.exports = (router, middlewares = []) => {
  router.get('/profile', middlewares.map(middleware => wrap(middleware)), wrap(loadPage));
  router.post('/update-profile-info', wrap(requestBodyValidation), wrap(updateUserInfo));

  return router;
};
```

- A `repository.js` file that contains feature database queries
- A `commands` folder where you can find all feature functionality functions, for example the login template rendering which looks like this:

```javascript
function loadPage(req, res) {
  debug('login:loadPage', req, res);
  res.render('pages/login');
}
```
- A `constants.js` file, to store all your static variables, for eg:

```
const USERNAME_PASSWORD_COMBINATION_ERROR = 'These credentials do not match our records.';
const INTERNAL_SERVER_ERROR = 'Something went wrong! Please try again.';
```

All feature routes are mounted in `routes/index.js` from the project root.

## For the Front-end side:

##### Templates

- You can find all the templates in `views` folder where you will find:
1. The `layout.ejs` file, the main template layout.
2. A `pages` folder with all the page templates
3. A `partials` folder with the common components (header, footer, sidebar)

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](https://demos.creative-tim.com/argon-dashboard/index.html?ref=adn-readme)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/nodejs-logo.jpg?raw=true" width="60" height="60" />](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme)

| HTML | NODEJS |
| --- | --- |
| [![Argon Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/96/original/opt_ad_thumbnail.jpg)](https://demos.creative-tim.com/argon-dashboard/index.html?ref=adn-readme) | [![Argon Dashboard Node](https://s3.amazonaws.com/creativetim_bucket/products/148/original/opt_ad_node_thumbnail.jpg)](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme)

## Demo

| Register | Login | Dashboard |
| --- | --- | ---  |
| [![Register](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-nodejs/argon_nodejs_1.jpg?raw=true)](https://argon-dashboard-nodejs.creative-tim.com/register?ref=adn-readme)  | [![Login](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-nodejs/argon_nodejs_7.jpg?raw=true)](https://argon-dashboard-nodejs.creative-tim.com/login?ref=adn-readme)  | [![Dashboard](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-nodejs/argon_nodejs_2.jpg?raw=true)](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme)

| Profile Page | Icons Page | Profile Page  |
| --- | --- | ---  |
| [![Profile Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-nodejs/argon_nodejs_3.jpg?raw=true)](https://argon-dashboard-nodejs.creative-tim.com/profile?ref=adn-readme)  | [![Icons Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-nodejs/argon_nodejs_4.jpg?raw=true)](https://argon-dashboard-nodejs.creative-tim.com/icons?ref=adn-readme)  | [![Tables Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-nodejs/argon_nodejs_6.jpg?raw=true)](https://argon-dashboard-nodejs.creative-tim.com/tables?ref=adn-readme)
[View More](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme)

## Documentation
The documentation for the Argon Dashboard Node is hosted at our [website](https://argon-dashboard-nodejs.creative-tim.com/docs/getting-started/overview.html?ref=adn-readme).

## File Structure

```
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── index.js
├── db
│   ├── index.js
│   ├── knexfile.js
│   ├── migrations
│   │   └── 20190213122702_create-users-table.js
│   └── seeds
│       └── create-default-user.js
├── docker-compose.yml
├── docs
│   └── documentation.html
├── ecosystem.config.js
├── env-files
│   ├── development.env
│   └── production.env
├── features
│   ├── login
│   │   ├── commands
│   │   │   ├── load-page.js
│   │   │   ├── login.js
│   │   │   ├── redirect-to-dashboard.js
│   │   │   └── verify-request-body.js
│   │   ├── constants.js
│   │   ├── init-auth-middleware.js
│   │   ├── repository.js
│   │   └── routes.js
│   ├── logout
│   │   ├── commands
│   │   │   └── logout.js
│   │   └── routes.js
│   ├── profile
│   │   ├── commands
│   │   │   ├── load-page.js
│   │   │   ├── update-user-info.js
│   │   │   └── verify-request-body.js
│   │   ├── constants.js
│   │   ├── repository.js
│   │   └── routes.js
│   ├── register
│   │   ├── commands
│   │   │   ├── create-user.js
│   │   │   ├── load-page.js
│   │   │   └── verify-request-body.js
│   │   ├── constants.js
│   │   ├── repository.js
│   │   └── routes.js
│   └── reset-password
│       ├── commands
│       │   └── load-page.js
│       └── routes.js
├── gulpfile.js
├── haproxy.cfg
├── logger.js
├── package.json
├── public
│   ├── css
│   │   ├── argon.css
│   │   └── argon.min.css
│   ├── fonts
│   │   └── nucleo
│   ├── img
│   │   ├── brand
│   │   ├── icons
│   │   └── theme
│   ├── js
│   │   ├── argon.js
│   │   └── argon.min.js
│   ├── scss
│   │   ├── argon.scss
│   │   ├── bootstrap
│   │   ├── core
│   │   └── custom
│   └── vendor
├── routes
│   └── index.js
├── screens
│   ├── Dashboard.png
│   ├── Login.png
│   ├── Profile.png
│   └── Users.png
├── views
│   ├── layout.ejs
│   ├── pages
│   │   ├── 404.ejs
│   │   ├── dashboard.ejs
│   │   ├── icons.ejs
│   │   ├── login.ejs
│   │   ├── maps.ejs
│   │   ├── profile.ejs
│   │   ├── register.ejs
│   │   ├── reset-password.ejs
│   │   └── tables.ejs
│   └── partials
│       ├── auth
│       │   ├── footer.ejs
│       │   ├── header.ejs
│       │   └── navbar.ejs
│       ├── dropdown.ejs
│       ├── footer.ejs
│       ├── header.ejs
│       ├── navbar.ejs
│       └── sidebar.ejs
└
```
## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Resources
- Demo: <https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme>
- Download Page: <https://www.creative-tim.com/product/argon-dashboard-nodejs?ref=adn-readme>
- Documentation: <https://argon-dashboard-nodejs.creative-tim.com/docs/getting-started/overview.html?ref=adn-readme>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/argon-dashboard-nodejs/issues)
- **Dashboards:**

| HTML | NODEJS |
| --- | --- |
| [![Argon Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/96/original/opt_ad_thumbnail.jpg)](https://demos.creative-tim.com/argon-dashboard/index.html?ref=adn-readme) | [![Argon Dashboard Node](https://s3.amazonaws.com/creativetim_bucket/products/148/original/opt_ad_node_thumbnail.jpg)](https://argon-dashboard-nodejs.creative-tim.com/?ref=adn-readme)

## Change log

Please see the [changelog](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Creative Tim](https://creative-tim.com/)
- [Under Development Office](https://udevoffice.com/)

## License

[MIT License](https://github.com/laravel-frontend-presets/argon/blob/master/license.md).

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Kit. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/?ref=adn-readme)

- Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-nodejs/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=adn-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=adn-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=adn-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=adn-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=adn-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles??ref=adn-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim?ref=adn-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=adn-readme>

Dribbble: <https://dribbble.com/creativetim?ref=adn-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=adn-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=adn-readme)
- [Under Development Office](https://udevoffice.com/ref=creativetim)
