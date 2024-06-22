document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
var user = localStorage.getItem("account");

var account = JSON.parse(user);

if(userName != account.userName || password != account.password){
    alert("User name or Password is incorrect");
    return;
}


alert ("Login successful");
window.location.href = "Home.html";
})
