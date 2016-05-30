(function () {

    'use strict';

    angular
        .module('angularApi')
        .controller('UsersController', UsersController);

    function UsersController(UsersResource) {

        var vm = this;

        var users = UsersResource.get();

        users.$promise.then(function(response) {

            vm.items = response.items;

        });

    }

})();
