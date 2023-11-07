
function verify()
    {
    if(document.getElementById("email1").value === document.getElementById("email2").value) {
    
        alert("Email address match")
    
    } else {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        alert("Email address do not match")
        }
    
    }
