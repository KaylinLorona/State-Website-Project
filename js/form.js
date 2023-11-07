
function verify()
    {
    if(document.getElementById("email1").value == document.getElementById("email2").value) {
    
        alert("matched")
    
    } else {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        alert("not matched")
        }
    
    }
