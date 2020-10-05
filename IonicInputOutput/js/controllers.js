angular.module('app.controllers', [])
  
.controller('orderPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.sizes = [
        {
            'id': 'xsmall',
            'label': 'X-Small',
        },
        {
            'id': 'small',
            'label': "Small",
            
        },
        {
            'id': 'medium',
            'label': "Medium",
        },
        {
          'id': 'large',
          'label':'Large',
        },
        {
            'id':'xlarge',
            'label':'X-Large',
        }
        
        ];
        
    
    $scope.data = {
        'size': $scope.sizes[0].id,
        'graphic': 'Blue',
        'note': ''
    }


}])
   
.controller('orderConfirmationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.orderdata = {
        'size': $stateParams.size,
        'graphic': $stateParams.graphic,
        'note': $stateParams.note,
        'rushshipping': $stateParams.rushshipping
    }


}])
 