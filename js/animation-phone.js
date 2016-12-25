//var preform = document.querySelector(".request-call");
var form = document.querySelector(".call-form");
var phone = document.querySelector("#phone-number");
var cross = document.querySelector(".cross");
var mainmenu = document.querySelector(".inner-catalog-2 a");
var mainmenu0 = document.querySelector(".inner-catalog a");
//var dateoff = document.querySelector("[name=departure]");
var link = document.querySelector(".request-call");
var footlink = document.querySelector(".request-call-foot");
var footform = document.querySelector(".call-form-foot");
var footformwrapper = document.querySelector(".request-call-form-foot");
var footcross = document.querySelector(".cross-foot");
var search2 = document.querySelector(".search-2")
mainmenu.addEventListener("click", function (event) {
    event.preventDefault();
});
mainmenu0.addEventListener("click", function (event) {
    event.preventDefault();
});
link.addEventListener("click", function (event) {
    event.preventDefault();
});
link.addEventListener("click", function (event) {
    if (form.classList.contains("animated-form")) {
        form.classList.remove("animated-form");
    } else {
        form.classList.add("animated-form");
    }
});
form.addEventListener("submit", function (event) {
    if (!phone.value) {
        event.preventDefault();
        form.classList.add("form-error");
    } else {
        form.classList.add("close-form");
    }
});
cross.addEventListener("click", function (event) {
    form.classList.remove("animated-form");
});
footlink.addEventListener("click", function (event) {
    event.preventDefault();
});
footlink.addEventListener("click", function (event) {
    if (footform.classList.contains("animated-form-foot")) {
        footform.classList.remove("animated-form-foot");
    } else {
        footform.classList.add("animated-form-foot");
    }
});
footcross.addEventListener("click", function (event) {
    footform.classList.remove("animated-form-foot");
});
//link.addEventListener("click", function (event) {
//    if (form.classList.contains("close-form")) {
//        form.classList.remove("close-form");
//    } else {
//        form.classList.add("animated-form");
//    }
//});
var i = 0;
var image = document.getElementById("menu-cross");
var imgs = new Array('images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png', 'images/animation-header-menu.png', 'images/closed.png');

function imgsrc() {
    i++;
    image.src = imgs[i];
}