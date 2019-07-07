app.controller("child_two",child_two);
child_two.$inject=["$scope"];
function child_two($scope) {
    $scope.var_four="I am from Child two";
}