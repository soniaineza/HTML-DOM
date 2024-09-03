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
    else{
        message="login successful";
        msgbox.style.color="green";
    }
    msgbox.innerText=message;
}