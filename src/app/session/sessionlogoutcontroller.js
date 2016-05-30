(function () {

    'use strict';

    angular
        .module('angularApi')
        .controller('SessionLogoutController', SessionLogoutController);

    function SessionLogoutController($auth, $location) {

        if (!$auth.isAuthenticated()) { return; }

        $auth.logout()
            .then(function() {
                //toastr.info('You have been logged out');
                $location.path('/');
            });

    }

})();
