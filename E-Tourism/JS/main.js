// let links = document.querySelectorAll("header ul a");
// links.forEach ((ele) => {
//     ele.onclick = () => {
//         links.forEach((ele) => {
//             ele.classList.remove("active")
//         });
//         ele.classList.add("active")
//     };
// });

// let landing = document.querySelector(".landing");
// let arrayOfImages = ["5eff48_14dad54672734fe78eb124bf6431c385_mv2.webp","Screenshot\ 2022-11-14\ 094657n.png","sillhoute.jpg","Tour-Egypt-Essential-360x225.jpg","ibis-slider6.jpeg"];

// setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * 4);
//     landing.style.backgroundImage = `url(/Images/${arrayOfImages[randomNumber]})`;
//     console.log(randomNumber)
// },3000);








let btn = document.querySelector("header .icons .fa-bars");
let ul = document.querySelector("header ul");
btn.onclick = () => {
    ul.classList.toggle("active");
    btn.classList.toggle("fa-xmark")
}

let btnSearch = document.querySelector("header .icons .fa-magnifying-glass");
let searchBox = document.querySelector(".landing .search")
let btnClose = document.querySelector(".landing .search .fa-xmark")
btnSearch.onclick = () => {
    searchBox.classList.toggle("active");
}
btnClose.onclick = () => {
    searchBox.classList.toggle("active");
}

let myLog = document.getElementById("login");
myLog.onclick = function () {
    location.href = "/E-Tourism/log.html"
}
let myMap = document.getElementById("map");
myMap.onclick = function () {
   window.open ("https://www.google.com/maps","_blank")
}






