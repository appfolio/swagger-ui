'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'jsonapi-swagger-ui',
    environment: environment
  };

  if (environment !== 'development') {
    ENV.basePath = '/api';
    ENV.rootURL = `${ENV.basePath}/docs/`;
  } else {
    ENV.rootURL = '/';
  }

  return ENV;
};
