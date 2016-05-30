(function() {
  'use strict';

  angular
    .module('angularApi')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $httpProvider, $authProvider, subdomain) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //$httpProvider.defaults.headers.common['hash'] = 's8QAn1e0Wy2YB7ZGxp8hJZLZUgpaItrv';
    $httpProvider.defaults.headers.common['hash'] = 'Be78Eu16';
    $httpProvider.defaults.headers.common['sub'] = subdomain;

    $authProvider.loginUrl = 'http://localhost:2727/auth/login';
    //$authProvider.signupUrl = '/api/auth/register';
    $authProvider.tokenName = 'token';
    //$authProvider.tokenPrefix = 'postsApp';

  }

})();
