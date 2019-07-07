app.service("my_service" , my_service);

my_service.$inject=["$http","$q"];

function my_service($http,$q) {


    var firewall_one = $q.defer();
    var firewall_two = $q.defer();

    this.info = function () {
        return $http.get("/info").then(function (res) {
            firewall_one.resolve(res);
            return firewall_one.promise;
        },function (res) {
            firewall_one.reject(res);
            return firewall_one.promise;
        });
    };


    this.about = function () {
      return $http.get("/about").then(function (response) {
          firewall_two.resolve(response);
          return firewall_two.promise;
      },function (res) {
          firewall_two.reject(res);
          return firewall_two.promise;
      });
    };
}