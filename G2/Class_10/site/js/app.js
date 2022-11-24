const menu = document.querySelector("#menu");

menu.addEventListener("click", function (e) {
    const links = document.querySelector(".nav-links");
    links.classList.toggle("show-links");
});