document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector(".loginBtn");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    button.addEventListener('click', function () {
        if (username.value === "admin" && password.value === "admin") {
            window.location.href = './convertor.html';
        } else {
            alert("Login Failed");
        }
    });
});
