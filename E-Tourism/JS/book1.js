let packageDetails = document.getElementById("kkkk");
let packageImages = document.getElementById("bbb");
let act1 = document.getElementById("act-1");
let act2 = document.getElementById("act-2");
let act3 = document.getElementById("act-3");
let ico1 = document.getElementById("ico-1");
let ico2 = document.getElementById("ico-2");
let ico3 = document.getElementById("ico-3");


act2.addEventListener("click", () => {
    packageDetails.style.cssText = "display:none"
    packageImages.style.cssText = "display:block"
    act2.style.cssText = " background-color:#ff4838;color:white;"
    ico2.style.cssText = "color:white"
    act1.style.cssText = " background-color:white;color:black;"
    ico1.style.cssText = "color:#ff4838"
})
act1.addEventListener("click", () => {
   
    packageImages.style.cssText = "display:none"
    packageDetails.style.cssText = "display:block"
     act1.style.cssText = " background-color:#ff4838;color:white;"
    ico1.style.cssText = "color:white"
    act2.style.cssText = " background-color:white;color:black;"
    ico2.style.cssText = "color:#ff4838"
})
act3.addEventListener("click", () => {
   
    window.open("https://www.google.com/maps/place/Verginia+Sharm+Hotel/@27.8708409,34.3142151,17z/data=!3m1!4b1!4m9!3m8!1s0x145339f50a10d811:0x3aca43d73981647d!5m2!4m1!1i2!8m2!3d27.8708362!4d34.3116455!16s%2Fg%2F1tg97n6c",
        "_blank")
     act1.style.cssText = " background-color:white;color:black"
    ico1.style.cssText = "color:#ff4838"
    act2.style.cssText = " background-color:white;color:black;"
    ico2.style.cssText = "color:#ff4838"
})