'use strict';

angular.module('jm-limit-height')
  .directive('jmLimitHeight', function() {
               function limitHeight(element, delta) {
                 var max_height = $(window).height() - delta;
                 element.css('max-height', max_height + 'px');
               }

               return {
                 restrict: 'A',
                 link:     function postLink(scope, element, attrs) {
                   var delta = attrs.jmLimitHeight;
                   element.css('overflow', 'auto');
                   limitHeight(element, delta);
                   window.addEventListener('resize', function() {
                     limitHeight(element, delta);
                   });
                 }
               };
             });
