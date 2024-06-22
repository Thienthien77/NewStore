var icon = document.querySelector(".icon");
var p = document.querySelectorAll(".content p");
var h6 = document.querySelector(".left h6");
var h4 = document.querySelectorAll(".left h4");
var content = document.querySelectorAll(".left .content");
var i = document.querySelectorAll(".icon i");
var menu = document.querySelector(".menu-store");
var boxs = document.querySelectorAll(".box");
var userName = document.getElementById("username");

 document.getElementById("logout").addEventListener("click", (e) => {

       e.preventDefault();

    window.location.href = "Login.html";
 })

var user = localStorage.getItem("account");
var account = JSON.parse(user);

userName.innerText = account.userName;

icon.addEventListener("click", () => {
    p.forEach(element => element.classList.toggle("hidden"));
    h4.forEach(element => element.classList.toggle("hidden"));
    i.forEach(element => element.classList.toggle("hidden"));
    h6.classList.toggle("hidden");
    menu.classList.toggle("menu-store");
})

content.forEach((element,index) => {
    element.addEventListener("click", () => {
        content.forEach(element => element.style.color = "white");
        element.style.color = "black";
        boxs.forEach(element => element.style.display = "none");     
        boxs[index].style.display = "block";
    })
})

