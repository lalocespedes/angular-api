(function() {
  'use strict';

  angular
    .module('angularApi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
            resolve: {
                loginRequired: loginRequired
            }
      })
        .when('/login', {
            templateUrl: 'app/session/login.html',
            controller: 'SessionController',
            controllerAs: 'login',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        .when('/logout', {
            templateUrl: 'app/session/logout.html',
            controller: 'SessionLogoutController',
            controllerAs: 'logout',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .when('/users', {
            templateUrl: 'app/users/users.html',
            controller: 'UsersController',
            controllerAs: 'users',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .when('/clients', {
            templateUrl: 'app/clients/clients.html',
            controller: 'ClientsController',
            controllerAs: 'clients'
        })
        .when('/client_add', {
            templateUrl: 'app/clients/add/clients_add.html',
            controller: 'ClientsAddController',
            controllerAs: 'clientsadd',
            resolve: {
                loginRequired: loginRequired
            }
        })
      .otherwise({
        redirectTo: '/'
      })
  }

    function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }

    function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            //deferred.reject();

            alert('atenticado');

        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }

})();
