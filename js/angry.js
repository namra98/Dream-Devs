function leap() {
    "use strict";
    var p = document.getElementById("by").value;
    //document.getElementById("demo").innerHTML = p;
    
    if(p>=18) {
        document.getElementById("demo").innerHTML = 'Aww you are able to drive Ferrari';
    }
    
    else {
        document.getElementById("d1").innerHTML = 'Ghare jai ne sui ja car chalava nhi male TMKB';
    }
}