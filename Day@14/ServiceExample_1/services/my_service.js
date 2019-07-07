/*
app.provider("my_service",my_service);
function my_service() {
    this.var_one = "Data From MongoDB Soon....";
    this.$get = function () {
        return this.var_one;
    };
}*/

app.factory("my_service",my_service);

function my_service() {
    return new objFunction("I am from Factory").my_fun();
}


