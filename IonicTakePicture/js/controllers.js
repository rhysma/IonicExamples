angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaCamera', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera) {
    
    $scope.takePicture = function(){
        var options = {
            quality: 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum : false
        };
        
        $cordovaCamera.getPicture(options).then(function(imageData){
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err){
            console.log(err);
        });
        
    }
    

}])
 