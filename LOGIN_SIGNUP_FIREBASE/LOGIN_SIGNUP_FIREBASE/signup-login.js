var loginForm = document.getElementById("loginInput");
var registerForm = document.getElementById("registerInput");
var btnForm = document.getElementById("btn");

function register(){
    loginForm.style.left = "-450px"
    registerForm.style.left = "50px"

    btnForm.style.left = "110px"


}
function login(){
    loginForm.style.left = "50px"
    registerForm.style.left = "450px"
    btnForm.style.left = "0px"
}