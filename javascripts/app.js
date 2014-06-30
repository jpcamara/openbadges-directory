'use strict';

var app = angular.module('directory', ['appPageControllers']);
app.directive('cancelClick', function () {
  return function(scope, element, attrs) {
    element.bind('click', function (e) {
      e.preventDefault && e.preventDefault();
      e.stopPropagation();
    });
  };
});
app.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});