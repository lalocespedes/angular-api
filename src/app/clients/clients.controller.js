(function () {

    'use strict';

    angular
        .module('angularApi')
        .controller('ClientsController', ClientsController);

    function ClientsController(clientResource) {

        var vm = this;

        var clients = clientResource.get();

        clients.$promise.then(function(response) {

            vm.clients = response.items;

        });

    }

})();
