app.controller("child_one",child_one);
child_one.$inject=["$scope"];
function child_one($scope) {
    $scope.var_three="I am from Child One";
}