myApp.controller('HomeCtrl',['$scope', '$http','orderByFilter',function($scope,$http,orderBy){
    
    
    var employees =[];
    
    
    $http.get("https://shielded-headland-24739.herokuapp.com/users")
    .then(function(response) {
        $scope.employees = response.data.data;
        console.log($scope.employees);
    });
    
    
   $scope.orderByField = 'firstName';
  $scope.reverseSort = false;

}]);