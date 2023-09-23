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
   
    window.open("https://www.google.com/maps/place/Jaz+Almaza+Beach+Resort,+Almaza+Bay/@31.198624,27.5602911,17z/data=!4m13!1m2!2m1!1s++Almaza+Beach+Resort,+Almaza+Bay!3m9!1s0x1461dd53f1555555:0x50a0b1cb77aa4b0d!5m2!4m1!1i2!8m2!3d31.198624!4d27.5555275!15sCh9BbG1hemEgQmVhY2ggUmVzb3J0LCBBbG1hemEgQmF5WiAiHmFsbWF6YSBiZWFjaCByZXNvcnQgYWxtYXphIGJheZIBBWhvdGVs4AEA!16s%2Fg%2F1tct5__f",
        "_blank")
     act1.style.cssText = " background-color:white;color:black"
    ico1.style.cssText = "color:#ff4838"
    act2.style.cssText = " background-color:white;color:black;"
    ico2.style.cssText = "color:#ff4838"
})