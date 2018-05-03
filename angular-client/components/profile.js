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

})

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
 


// 	 $scope.selectFile= function(files){
// 	 	console.log("hi")

//   var file    = files[0];
//   console.log(file,"fileeeee")
//   var reader  = new FileReader();

//   reader.addEventListener("load", function () {
//     $scope.image = reader.result;
//     console.log($scope.image,"reader.resuuuuuuuult")
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
//  }
// })


	//   var post = function (data,url) {
	// var requestData = {
	// 	method :'POST',
	// 	url : url,
	// 	data : data
	// }
	// $http(requestData).then(function () {
	// 	console.log('success');
	// },function () {
	// 	console.log('error');
	// })
 // }
//  $scope.uploadFile =function(){
//  	console.log($scope.myFile,"fileeeeee")
//  	var file = $scope.myFile;
//            var uploadUrl = "/savedata";
//            fileUpload.uploadFileToUrl(file, uploadUrl);
//  }
})

// app.service('fileUpload', ['$http', function ($http) {
//         this.uploadFileToUrl = function(file, uploadUrl){
//            var fd = new FormData();
//            fd.append('file', file);
//            $http.post(uploadUrl, fd, {
//               transformRequest: angular.identity,
//               headers: {'Content-Type': undefined}
//            })
//            .then(function(){
//             console.log('success');
//            })
//            ,function () {
//               console.log('error');
//              }
//         }
//      }]);

// app.directive('fileModel', ['$parse', function ($parse) {
//         return {
//            restrict: 'A',
//            link: function(scope, element, attrs) {
//               var model = $parse(attrs.fileModel);
//               var modelSetter = model.assign;
//               element.bind('change', function(){
//                  scope.$apply(function(){
//                     modelSetter(scope, element[0].files[0]);
//                  });
//               });
//            }
//         };
//      }]);




