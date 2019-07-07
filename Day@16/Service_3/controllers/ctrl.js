app.controller("ctrl",ctrl);
ctrl.$inject=["$scope","my_service","$q"];
function ctrl($scope,my_service,$q) {

    /*my_service.info().then(function (response) {
       $scope.info = response;
    });


    my_service.about().then(function (response) {
       $scope.about = response;
    });*/





    $q.all([my_service.info(),my_service.about()])
            .then(function (response) {
       $scope.info = response[0];
       $scope.about = response[1];
    });



}