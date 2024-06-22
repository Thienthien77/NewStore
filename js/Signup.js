document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

if (password !== confirmPassword) {
    alert("Password not match");
    return;
}
const user = {
    userName : userName,
    email: email,
    password: password
}

localStorage.setItem("account", JSON.stringify(user));

alert ("Sign up successful");
window.location.href = "Login.html";
})
