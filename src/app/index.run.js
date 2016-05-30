(function() {
  'use strict';

  angular
    .module('angularApi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
