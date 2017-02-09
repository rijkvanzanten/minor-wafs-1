/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

(function(){

//var config = {  
    
//}
var config = {
    routenames : document.querySelectorAll("#navUl li a"),
    routesLoop  : function() {
        for (i = 0; i < routenames.length; i++) { 
        console.log(routenames[i]);
        }
    }
};

    
var app = {
    init: function() {
        routes.init();
//        console.log("app initiate");
    }
};

var routes = {
    init: function() {
        window.addEventListener("hashchange", function() {
//            console.log("HASHTAG CHANGED");
        });
//        console.log("intiate toggle");
    }
};

var sections = {
    toggle: function(route) {
//        route = console.log("jippie");
    }
}

;
app.init();
routes.init();
sections.toggle();
//    console.log(config.routenames);
    
    


//var routes = {
//    routes: routes.init(),
////    config.routes
//}
//
//var sections = {
//    sections: sections.toggle(route)
////    config.sections   
//}


}());

function joe () {
        for (i = 0; i < config.routenames.length; i++) { 
        console.log(config.routenames[i]);
        }
    }


//var config = {
//    routenames : document.querySelectorAll("#navUl li a")
//};
//
//console.log(config.routenames.hash);

