angular.module('app.controllers', [])
  
.controller('orderPageCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

    $scope.sizes = [
        {
            'id': 'small',
            'label': 'Small',
        },
        {
            'id': 'medium',
            'label': 'Medium',
        },
        {
            'id': 'large',
            'label': 'Large',
        }
        
        ];
        
        $scope.data = {
            'size': $scope.sizes[0].id,
            'extracheese': false,
            'topping': 'pepperoni',
            'note': ''
        }

        $scope.order = function(){
           // console.log("Order a " + $scope.data.size + " pizza with the topping " + $scope.data.topping);
           $state.go('orderConfirmation', $scope.data);
        }

}])
   
.controller('orderConfirmationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.data = {
        'size': $stateParams.size,
        'extracheese': $stateParams.extracheese,
        'topping': $stateParams.topping,
        'note': $stateParams.note
    }
}])
 