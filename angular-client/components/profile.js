var app = angular.module('mainProject' );

app.component('profile', {
	templateUrl :'/templates/profile.html'
});

app.controller('profile' ,[ '$scope','$http',function ($scope , $http) {
	//$scope.hanan = "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg"
	//var hanan="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg";
	//$scope.hanan =hanan;
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
  //console.log(file,"fileeeee")
  var fileReader  = new FileReader();
  fileReader.readAsDataURL(file)
  fileReader.onload=function(e){
  	     console.log(e,"eeeee")
  	     console.log(e.target.result,"e.targeeeeeeeeet")
         $scope.hanan = e.target.result;
         //e.target.result
    }            
  }      
  }])

  // reader.addEventListener("load", function () {
  //   $scope.image = reader.result;
  //   console.log($scope.image,"reader.resuuuuuuuult")
  // }, false);

  // if (file) {
  //   reader.readAsDataURL(file);
  // }
 