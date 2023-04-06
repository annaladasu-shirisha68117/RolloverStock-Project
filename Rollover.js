const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const phonenumber = document.getElementById("cphonenumber")
const tandc = document.getElementById("tc")

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
 var password_error = document.getElementById('password_error');

form.addEventListener('submit',(e)=>{

    let nameValue = uname.value
    let emailValue = email.value
    let phonenumbervalue = phonenumber.value
    e.preventDefault()

    if(nameValue && emailValue && phonenumbervalue) {
        console.log("if case called")
        validate();
        window.location.href = "index.html"
    }

})
function validate(){
    console.log('-->> validate fun called')
    let nameValue = uname.value
    let emailValue = email.value
    let phonenumbervalue = phonenumber.value
    console.log('-->> console', nameValue, emailValue, phonenumbervalue)
   
   if(nameValue===''){
    setError(uname, 'user name cannot be empty')
   }
   else if(nameValue.length<3){
    setError(uname,'user name should be minimum 3 characters')
   }
   else{
    setSuccesss(uname)
   }

 if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
    }
    if(phonenumbervalue===''){
        setError(phonenumber,'phonenumber cannot be empty')
    }
    else if(phonenumber.length<8){
        setError(phonenumber,'phonenumber should be minimum 8 characters')
    }
    else{        
        setSuccesss(phonenumber)
    }
    }
     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')        
    }
    else{
        setSuccesss(tc)
    }  
function setError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccesss(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailCheck(input){
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)       
    return valid;
}




