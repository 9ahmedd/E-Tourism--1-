// document.getElementById("log").onsubmit = function () {
//     let emailInput = document.getElementById("input1").value;
//     let passInput = document.getElementById("input2").value;
//     let emailReg = /\w+@\w+.lw+/;
//     let passReg = /\w{6,10}\d{6,10}/;
//     let emailValid = emailReg.test(emailInput);
//     let passValid = passReg.test(passInput);
//     if (emailValid === false | passValid === false) {
//         return false;

//     }
    
//     return true;
    
// }

let myLink = document.getElementById("link");
myLink.onclick = function () {
    location.href = "/E-Tourism/register.html";
}