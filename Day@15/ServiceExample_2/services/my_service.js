app.service("my_service",my_service);
my_service.$inject=["$http","$q"];
function my_service($http,$q) {

    var deffered_one = $q.defer();
    var defferede_two=$q.defer();
    var deffered_three=$q.defer();
    
    
    this.fun_one = function () {
        return $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
            deffered_one.resolve(response.data.records);
            return deffered_one.promise;
        },function (response) {
            deffered_one.reject(response);
            return deffered_one.promise;
        });
    };

    this.fun_two = function () {
        return $http.get("http://demosoft.highgrowth.in/test/jsonexample.php")
            .then(function (response) {
                defferede_two.resolve(response.data.posts)
           return defferede_two.promise;
        },function (response) {
                defferede_two.reject(response);
                return defferede_two.promise;
            });
    };


    this.fun_three = function () {

      return $http.post("http://test-routes.herokuapp.com/test/uppercase",                {"message":"angularjs"})
                    .then(function (response) {
        deffered_three.resolve(response.data.message);
         return deffered_three.promise;
      },function (response) {
                        deffered_three.reject(response);
                        return deffered_three.promise;
                    });
    };

};