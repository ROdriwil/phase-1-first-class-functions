
function receivesAFunction(john){
    john();
}
function returnsANamedFunction(){
   return receivesAFunction;
}
function returnsAnAnonymousFunction(){ 
    return function(){}

}