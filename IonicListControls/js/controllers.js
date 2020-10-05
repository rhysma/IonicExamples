angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.customers =  [
        { name: 'Lisa', job: 'Student', picture: 'https://cdn.pastemagazine.com/www/blogs/lists/2010/05/13/lisa_simpson.jpg', url:'Lisa_Simpson' },
        { name:'Garfield', job:'Cat', picture: 'https://s-media-cache-ak0.pinimg.com/736x/33/53/77/335377f3ba512726cc4e67b8fdc7a3b8.jpg', url:'Garfield'} ,
        { name:'Bender', job:'Bender', picture:'https://cdn.pastemagazine.com/www/blogs/lists/2010/05/13/bender.jpg', url: 'Bender_(Futurama)' },
        { name: 'Stewie', job: 'Baby', picture: 'https://s-media-cache-ak0.pinimg.com/736x/4b/53/55/4b53554766a2ed8fe948c08b09f37b1b.jpg', url:'Stewie_Griffin'}
        ];
}])
 