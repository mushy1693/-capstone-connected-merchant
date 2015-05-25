var app = angular.module('merchant-controller',[]);

app.controller('merchant',['$scope','$http',function($scope,$http){

  $http.get('/api/merchant').success(function(data){

    $scope.merchantData = data;

  });

}]);
