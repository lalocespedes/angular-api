(function () {

    'use strict';

    /**
     * @ngdoc service
     * @name
     * @description
     * #
     * Service in the myApp.
     */
    angular.module('angularApi')
        .service('clientResource', function ($resource, base_url) {

            return $resource( base_url + "/api/clients");

        });

})();
