// function signUpvalidation(){
//     let name=document.forms.signUpForm.name.value;
//      let email=document.forms.signUpForm.email.value;
//       let password=document.forms.signUpForm.password.value;
//        let confirmpw=document.forms.signUpForm.confirmpw.value;

//        let regEmail= /^
    
// }

container = document.querySelector(".container"),
pwShowHide = document.querySelector(".showhidepw"),
pwField = document.querySelector(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");


// js code to show and hide password and change icon

pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListner("click",()=>{
        pwField.forEach(pwField=>{
            if(pwField.type  === "password"){
                pwField.type="text";
                pwShowHide.forEach(icon =>{
                  icon.classList.replace("fa-eye-slash","fa-eye");
                })
            }else{
                pwField.type="password";

                pwShowHide.forEach(icon=>{
                    icon.classList.replace("fa-eye","fa-eye-slash")
                })
            }
        })
    })
});
// form validation
function loginvalidation(){
    let email=document.forms.loginForm.email.value;
    let password=document.forms.loginForm.password.value;
    regEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email== "" ||  !regEmail.test(email)){
        alert("please enter your Email properly.");
        email.focus();
        return false;
    } if(password==""){
        alert("please enter your password");
        password.focus();
        return false;
    }else{
        alert(Login)
    }
}