let lgn = document.getElementById("login");
let reg = document.getElementById("register");
let btn = document.getElementById("btn");
let loginButton = document.getElementById("btnLogin");
let registerButton = document.getElementById("btnRegister");
let modal = document.getElementById("modal");

const colors = [
    "#1b517e",  //theme-dark
    "#3580c7",  //theme-normal
    "#38afff",  //theme-light
    "#eeeeee"   //theme-grey
];

window.onclick = function(event) {
    if(event.target == modal)
        modal.style.display = "none";
}

function register() {
    lgn.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "150px";
    loginButton.style.fontWeight = "normal";
    loginButton.style.color = colors[0];
    loginButton.style.transition = ".5s";
    registerButton.style.fontWeight = "bold";
    registerButton.style.color = colors[3];
    registerButton.style.transition = ".5s";
}

function login() {
    lgn.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0px";
    registerButton.style.fontWeight = "normal";
    registerButton.style.color = colors[0];
    registerButton.style.transition = ".5s";
    loginButton.style.fontWeight = "bold";
    loginButton.style.color = colors[3];
    loginButton.style.transition = ".5s";
}

function showModal(){
    modal.style.transition = ".5s";
    modal.style.display = "block";
}

function showLoginForm(){
    showModal();
}

function showRegisterForm(){
    showModal();
}