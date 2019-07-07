/*
app.provider("my_service",my_service);
function my_service() {
    this.var_one = "Data From MongoDB Soon....";
    this.$get = function () {
        return this.var_one;
    };
}*/

/*app.factory("my_service",my_service);

function my_service() {
    return new objFunction("I am from Factory").my_fun();
}*/

/*app.service("my_service",my_service);
function my_service() {
    this.my_fun = function(){
        return "I am from Service";
    }
}*/

/*app.value("my_service","First Value");
app.value("my_service","Second Value");*/


app.constant("my_service","First Value");
app.constant("my_service","Second Value");





