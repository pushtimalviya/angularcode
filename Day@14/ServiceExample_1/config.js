app.config(config);
config.$inject=["my_serviceProvider"];
function config(my_serviceProvider) {
    my_serviceProvider.var_one = "Data From Hadoop DB Soon...";
}