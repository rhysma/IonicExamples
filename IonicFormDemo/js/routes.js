angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('orderPage', {
    url: '/page1',
    templateUrl: 'templates/orderPage.html',
    controller: 'orderPageCtrl'
  })

  .state('orderConfirmation', {
    url: '/page2',
	params: {
		size: "",
		extracheese: "",
		topping: "",
		note: ""		
},
    templateUrl: 'templates/orderConfirmation.html',
    controller: 'orderConfirmationCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});