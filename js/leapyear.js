function leap() {
    var q = parseInt(document.getElementById("by").value);
    if (q % 4 == 0)
    {
        if (q % 100 == 0)
        {
            if (q % 400 == 0)
               alert(" is a leap year.");
            else
                alert(" is a not leap year.");
        }
        else
             alert(" is a leap year.");
    }
    else
        alert(" is a not leap year.");
    
}