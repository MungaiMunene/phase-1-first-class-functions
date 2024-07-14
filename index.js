// returnsAFunction
function receivesAFunction (callback) {
    callback();
}
 
// returnsANamedFunction 
function returnsANamedFunction () {
    function namedFunction () {
        console.log("I am a named function"); 
    }
return namedFunction; 
}
// returnsAnAnonymousFunction 
function returnsAnAnonymousFunction () {
    return function () {
}
}
