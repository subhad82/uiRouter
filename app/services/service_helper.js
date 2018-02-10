myApp.factory("helper",function(){
    var service = {};
    
    service.showAlert = function(){
        console.log("This is the helper class");
    }
    
    return service;
});
