var app = angular.module('mainProject' );

app.component('profile', {
	templateUrl :'/templates/profile.html'
});

app.controller('profile' , function ($scope , $http) {
	  var get = function () {
		var response={
			method:"GET",
			url : '/user'
		}
			$http(response).then(function (data) {
				$scope.user = data.data;
			},function () {
				console.log('error')
			});
	 }
	 get()
	 $scope.selectFile= function(files){
	 	console.log("hi")

  var file    = files[0];
  console.log(file,"fileeeee")
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    $scope.image = reader.result;
    console.log($scope.image,"reader.resuuuuuuuult")
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
 }
})