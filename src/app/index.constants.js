/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularApi')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('noty', noty)
    .constant('subdomain', getSubdomain())
    .constant('base_url', 'http://localhost:2727');

    function getSubdomain() {
        var segments = location.hostname.split('.');
        return segments.length>2?segments[segments.length-3].toLowerCase():null;

        //return 'dev';
    }

})();
