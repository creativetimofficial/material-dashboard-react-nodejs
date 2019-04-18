module.exports = {
  apps: [
    {
      name: 'material-dashboard-free-backend',
      script: './bin/www',

      watch: true,
      ignore_watch: ['public/**/*', 'views/**/*.ejs'],
    },
  ],
};
