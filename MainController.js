/**
* Created with AngularLabTest1.
* User: Tora1024
* Date: 2014-06-06
* Time: 04:17 PM
* To change this template use Tools | Templates.
*/

app.controller("MainController", function($scope, $http){
	
    $scope.selectedPerson = 0;
    $scope.selectedGenre = null;
	
    $http.get('music.json')
       .then(function(res){
          console.log("cdfdsfds");
          $scope.people = res.data;                
        });
});