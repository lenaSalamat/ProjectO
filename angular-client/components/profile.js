var app = angular.module('mainProject' );

app.component('profile', {
	templateUrl :'/templates/profile.html'
});

app.controller('profile' , function ($scope , $http,fileUpload) {
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
 $scope.uploadFile =function(){
 	console.log($scope.myFile,"fileeeeee")
 	var file = $scope.myFile;
           var uploadUrl = "/savedata";
           fileUpload.uploadFileToUrl(file, uploadUrl);
 }
})

app.service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
           var fd = new FormData();
           fd.append('file', file);
           $http.post(uploadUrl, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           })
           .then(function(){
            console.log('success');
           })
           ,function () {
              console.log('error');
             }
        }
     }]);

app.directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;
              element.bind('change', function(){
                 scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
     }]);


