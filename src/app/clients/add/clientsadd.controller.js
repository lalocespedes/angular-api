(function () {

    'use strict';

    angular.module('angularApi')
        .controller('ClientsAddController', ClientsAddController);

    function ClientsAddController(clientResource, $log) {

        var vm = this;

        vm.post = {};

        vm.send = function() {

            var save = clientResource.save(vm.post);

            $log.debug(vm.post);

            save.$promise.then(function(response) {

                $log.debug(response);

            });

        }
    }

})();
