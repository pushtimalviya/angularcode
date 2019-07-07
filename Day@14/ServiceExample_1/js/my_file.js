var objFunction = function(data){

    this.var_one=data;

    this.my_fun=function(){
        return this.var_one;
    }
}