angular.module('app.controllers', [])

.controller('highlightEventsCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.$on("$ionicView.beforeEnter", function() {
    $http.get("http://localhost:1337/").then(function(response){
        console.log(response.data);
        $scope.items = response.data.events;
        //console.log($scope.item[2].imgURL);
    });
  });

}])

.controller('searchByDepartmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('searchByVenueCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, $state) {

    $scope.data = {};

    $scope.login = function () {

        $http.post("http://localhost:1337/user/login", $scope.data)
        .then(function (response) {

            // A confirm dialog
            var confirmPopup = $ionicPopup.confirm({
                title: 'Welcome back!',
                template: 'Go back to previous page?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    $ionicHistory.goBack();
                } else {
                    console.log('granted');
                    $state.go($state.current, {}, { reload: true });
                }
            });

        }, function (response) {

            var alertPopup = $ionicPopup.alert({
                title: response.data,
                template: 'Login failed. Please try again.'
            });
        });

    }

}])

.controller('accountInfoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('departmentEventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('venueEventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('eventDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('registeredEventCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
