function validation(){
    if(document.formfill.username.value===""){
        document.getElementById("result").innerHTML="enter username";
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="atleast six letter";
        return false;
    }

    else if(document.formfill.email.value===""){
            document.getElementById("result").innerHTML="enter your email";
            return false;
    }
    else if(document.formfill.password.value===""){
        document.getElementById("result").innerHTML="enter your password";
        return false;
}
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="atleast six letter";
        return false;
}
    else if(document.formfill.confirmpassword.value===""){
         document.getElementById("result").innerHTML="enter confirmpassword";
         return false;
}

    else if(document.formfill.password.value!==document.formfill.confirmpassword.value){
         document.getElementById("result").innerHTML="don't match";
         return false;
}
else if(document.formfill.password.value==document.formfill.confirmpassword.value){
    popup.classList.add("open-slide")
    return false;
}
}
var popup=document.getElementById("popup")
function closeslide(){
    popup.classList.remove("open-slide")
}