function validate(){
    var username = document.getElementById("name");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var repassword = document.getElementById("rpassword");
    var address = document.getElementById("address");

    if(username.value == "" || password.value == "" || repassword.value == "" || email.value == "" || address.value == ""){
        
        alert("No Blank value allowed");
        return false;
    }
    else{
        true;
    }
    

    if(repassword.value != password.value){
        alert("Password must be same");
        return false;
    }
    else{
        
         true;
    }

   
}