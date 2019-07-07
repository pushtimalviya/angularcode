app.controller("ctrl",ctrl);
ctrl.$inject=["$scope","my_service","$q"];
function ctrl($scope,my_service,$q) {






    $q.all([
            my_service.fun_one(),
            my_service.fun_two(),
            my_service.fun_three()
        ]).then(function (response) {

                $scope.var_one=response[0];
                $scope.var_two=response[1];
                $scope.var_three=response[2];
    });





    /*my_service.fun_one().then(function (response) {
        $scope.var_one=response;
    });

    my_service.fun_two().then(function (response) {
       $scope.var_two=response;
    });

    my_service.fun_three().then(function (response) {
        $scope.var_three = response;
    });*/
}