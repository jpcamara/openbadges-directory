'use strict';

var appPageControllers = angular.module('appPageControllers', []);

appPageControllers.controller('RegisterController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
  $scope.name = '';
  $scope.endpoint = '';
  $scope.email = '';
  $scope.website = '';
  $scope.description = '';
  $scope.organization = '';
  $scope.success = false;

  $scope.register = function () {
    $http.post('').success(function (response) {
      if (response.data && response.data.success) {
        $scope.success = true;
      }
    }).error(function (data, status) {
      console && console.log && console.log(data, status);
      alert('There was an error during your registration. Please try again.');
    });

    $scope.$watch('name', function () {
      console.log($scope.name);
    });
  };
//    $http.get(endpoint + '/search?page=' + page + (query.length ? '&' + query.join('&') : '')).success(function (response) {
//      if (!response.data.length) { done = true; }
//      if ($scope.badges && $scope.badges.length) {
//        response.data.forEach(function (item) { $scope.badges.push(item); });
//      } else {
//        $scope.badges = response.data;
//      }
//    });
//  };
}]);