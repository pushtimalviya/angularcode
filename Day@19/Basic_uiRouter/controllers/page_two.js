(function () {
    "use strict";
    app.controller("page_two",page_two);
    page_two.$inject=["$scope"];
    function page_two($scope) {
        $scope.var_two="Data From MongoDB...";
    }
})();