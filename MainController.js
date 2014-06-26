app.controller("MainController", function($scope, $http, $parse) {
   
    $scope.inputValue = "";
    
    //$http({method: 'GET', url: 'http://www.qyqdev.com/angular/getdata.php'}).success(function(music) {
             
    $http({method: 'GET', url: 'getdata.json'}).success(function(music) {
        $scope.selectedPerson = 0;
        $scope.selectedGenre = null;
        $scope.people = music;
        
        //console.log(music);
        
    });
    
    /*
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
    
    
    // second level test
    /*
    $http({method: 'GET', url: 'http://www.qyqdev.com/angular/getdata.php'}).
    success(function(data, status, headers, config) {
        console.log(data);
    }).
    error(function(data, status, headers, config) {
      console.log(data);
    });
    */
    
});
    
    
    