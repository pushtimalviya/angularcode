(function () {
    "use strict";

    app.controller("page_one",page_one);
    page_one.$inject=["$scope","$stateParams"];
    function page_one($scope,$stateParams) {
        $scope.var_one = $stateParams.id+"..."+$stateParams.name+"..."+$stateParams.age;
    }

})();