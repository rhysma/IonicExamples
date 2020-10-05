angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}
])
   
.controller('newPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.pictures = [
        'https://lynseyewan.files.wordpress.com/2015/04/kitten.png',
        'https://www.pets4homes.co.uk/images/cats_hero.png',
        'http://dontlettheminivanfoolyou.com/wp-content/uploads/2015/09/kitten.png'
        ];

}])
 