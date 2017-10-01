myApp.factory('getPhotoList', ['$http', function($http){
	var factory = {};

	factory.getList = function(){
		return $http.get('http://jsonplaceholder.typicode.com/photos');
	};

	return factory;
}]);