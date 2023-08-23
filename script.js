document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const closeLoginPopup = document.getElementById("closeLoginPopup");
    const closeRegisterPopup = document.getElementById("closeRegisterPopup");
    const loginPopup = document.getElementById("loginPopup");
    const registerPopup = document.getElementById("registerPopup");

    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginPopup.style.display = "flex";
    });

    registerLink.addEventListener("click", function (e) {
        e.preventDefault();
        registerPopup.style.display = "flex";
    });

    closeLoginPopup.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });

    closeRegisterPopup.addEventListener("click", function () {
        registerPopup.style.display = "none";
    });

    // Rest of your code...
});
