myApp.controller('ListController', ['$scope', '$routeParams', 'getPhotoList', function($scope, $routeParams, getPhotoList) {
    getPhotoList.getList().success(function(data){
        $scope.photoList = data;
    });
}]);

myApp.controller('DetailsController', ['$scope', '$routeParams','getPhotoList', function($scope, $routeParams, getPhotoList) {
    getPhotoList.getList().success(function(data){
        $scope.photoList = data;
        $scope.whichItem = $routeParams.itemId-1;
    });
}]);


