module.exports = {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000, // Set polling untuk menghindari error
        aggregateTimeout: 300,
      };
      return config;
    },
  };
  