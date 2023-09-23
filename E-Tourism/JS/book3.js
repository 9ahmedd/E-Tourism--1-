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
   
    window.open("https://www.google.com/maps/place/Nefertiti+Hotel+Luxor/@25.7015514,35.0812301,8z/data=!4m13!1m2!2m1!1sNefertiti+Hotel!3m9!1s0x144915793ddb0125:0xe6577d403df25035!5m2!4m1!1i2!8m2!3d25.7015514!4d32.6422653!15sCg9OZWZlcnRpdGkgSG90ZWxaESIPbmVmZXJ0aXRpIGhvdGVskgEFaG90ZWzgAQA!16s%2Fg%2F11n5fnp451",
        "_blank")
     act1.style.cssText = " background-color:white;color:black"
    ico1.style.cssText = "color:#ff4838"
    act2.style.cssText = " background-color:white;color:black;"
    ico2.style.cssText = "color:#ff4838"
})