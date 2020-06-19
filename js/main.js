$(document).ready(function () {
    const mMenuBtn = $(".mobile__menu");
    const mMenu = $(".m__menu");
    mMenuBtn.on ("click", function() {
        mMenu.toggleClass("active");
        $("body").toggleClass("no-scroll");

    });
});