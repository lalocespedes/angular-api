(function () {

    'use strict';

    angular
        .module('angularApi')
        .controller('SessionController', SessionController);

    function SessionController($auth, $location, $log) {

        var vm = this;

        vm.send = function(){

            $auth.login({
                email: vm.email,
                password: vm.password
            })
                .then(function(){
                    $location.path("/");
                })
                .catch(function(response){

                    noty({
                        layout: 'bottom',
                        text: 'Usuario y/o contrsena incorrectos',
                        type: 'alert',
                        theme: 'relax'
                    });

                    $log.debug(response);

                });
        };
    }

})();
