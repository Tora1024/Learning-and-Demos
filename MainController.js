/**
 * Created with AngularLabTest1.
 * User: Tora1024
 * Date: 2014-06-06
 * Time: 04:17 PM
 * To change this template use Tools | Templates.
 */
app.controller("MainController", function($scope, $http, $parse) {
    $scope.inputValue = "";
    
    $http({method: 'POST', url: 'music.json'}).success(function(music) {
             
        $scope.selectedPerson = 0;
        $scope.selectedGenre = null;
        //$scope.people = music.data;
        
        console.log(music);
    });
  
    
    // example source
    
    
    //console.log(fran);
    
    /*
    
    var datos = [
							    {
							        nombre: 'Matusalén',
							        edad: 'Desconocida'
							    },
							    {
							        nombre: 'Madonna',
							        edad: 60
							    }
							];
     
    $scope.people = [{
        id: 0,
        name: 'Leon',
        music: ['Rock', 'Metal', 'Dubstep', 'Electro']
    }, {
        id: 1,
        name: 'Chris',
        music: ['Indie', 'Drumstep', 'Dubstep', 'Electro']
    }, {
        id: 2,
        name: 'Harry',
        music: ['Rock', 'Metal', 'Thrash Metal', 'Heavy Metal']
    }, {
        id: 3,
        name: 'Allyce',
        music: ['Pop', 'RnB', 'Hip Hop']
    }];
    */
    
    
});