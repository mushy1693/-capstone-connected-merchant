var app = angular.module('traveler-controller',[]);

app.controller('traveler',['$scope','$http',function($scope,$http){

  $http.get('/api/traveler').success(function(data){

    $scope.travelerData = data;

  });

}]);
