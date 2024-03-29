var toTopButton = document.getElementById("to-top-button");
var scrollDownIndicator = document.getElementById("scroll-down-indicator");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
        scrollDownIndicator.style.opacity = 0;
    } else {
        toTopButton.classList.add("hidden");
        scrollDownIndicator.style.opacity = 1;
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}