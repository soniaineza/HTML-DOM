function myfunction(e){
    e.preventDefault();
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const age=document.getElementById("age").value;
    const msgbox=document.getElementById("message");
    let message="";
    
     if(email==""){
        message="please enter an email";
        msgbox.style.color="red";
    }
   else if(pass==""){
        message="please enter an pass";
        msgbox.style.color="red";
    }
    else if(age==""){
        message="please enter an age";
        msgbox.style.color="red";
    }
    else{
        message="login successful";
        msgbox.style.color="green";
    }

    msgbox.innerText=message;
}