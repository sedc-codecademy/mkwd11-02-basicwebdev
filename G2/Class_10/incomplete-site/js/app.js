const menu = document.querySelector("#menu");

menu.addEventListener("click", function (e) {
    const links = document.querySelector(".nav-links");
    links.classList.toggle("show-links");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-show");
        }
    })
})

document.querySelectorAll(".slide-in").forEach(entry => observer.observe(entry));