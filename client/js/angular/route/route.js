app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'js/angular/view/home.html'
      }).
      when('/merchant', {
        templateUrl: 'js/angular/view/merchant.html',
        controller: 'merchant'
      }).
      when('/traveler', {
        templateUrl: 'js/angular/view/traveler.html',
        controller: 'traveler'
      }).
      when('/chat', {
        templateUrl: 'js/angular/view/chat.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
