
app.controller("MainController", function($scope, $http){
	
    console.log("cdfdsfds");
    $scope.selectedPerson = 0;
    $scope.selectedGenre = null;
	
    $http.get('music.json')
       .then(function(res){
          
          $scope.people = res.data;                
        });
});