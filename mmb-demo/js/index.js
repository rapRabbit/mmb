function bannerLoop() {
    var e = document.querySelector(".banner"),
        t = e.querySelector("ul"),
        n = e.querySelectorAll("ol>li"),
        a = e.offsetWidth,
        i = 1,
        o = null;
    o = setInterval(function () {
        c(), d(-a * ++i)
    }, 2e3);
    var r = 0,
        s = 0,
        l = 0;

    function c() {
        t.style.transition = "all .2s", t.style.webkitTransition = "all .2s"
    }

    function u() {
        t.style.transition = "none", t.style.webkitTransition = "none"
    }

    function d(e) {
        t.style.transform = "translateX(" + e + "px)", t.style.webkitTransform = "translateX(" + e + "px)"
    }

    function f() {
        5 == i ? (i = 1, u(), d(-a * i)) : 0 == i && (i = 4, u(), d(-a * i)), document.querySelector(".active").classList.remove("active"), n[i - 1].classList.add("active")
    }
    t.addEventListener("touchstart", function (e) {
        r = e.touches[0].pageX, clearInterval(o)
    }), t.addEventListener("touchmove", function (e) {
        s = e.touches[0].pageX, d((l = s - r) - i * a)
    }), t.addEventListener("touchend", function () {
        Math.abs(l) < 1 / 3 * a ? (c(), d(-i * a)) : l < 0 ? (c(), d(- ++i * a)) : (c(), d(- --i * a)), o = setInterval(function () {
            c(), d(-a * ++i)
        }, 2e3)
    }), window.addEventListener("blur", function () {
        clearInterval(o)
    }), window.addEventListener("focus", function () {
        o = setInterval(function () {
            c(), d(-a * ++i)
        }, 2e3)
    }), t.addEventListener("transitionend", f), t.addEventListener("webkitTransitionend", f)
}
$(function () {
    var n, a;
    bannerLoop(), n = $("#menu"), $.ajax({
        type: "get",
        url: baseUrl + "/api/getindexmenu",
        success: function (e) {
            var t = template("indexMenu", e);
            n.html(t), $("#menu > .row > .menu-item:nth-last-child(-n+4)").hide(), $("#menu > .row > .menu-item:nth-child(8)").on("click", function () {
                for (var e = 1; e <= 4; e++) $("#menu > .row > .menu-item:nth-last-of-type(" + e + ")").fadeToggle(400)
            })
        }
    }), a = $("#recommen-product ul"), $.ajax({
        type: "get",
        url: baseUrl + "/api/getmoneyctrl",
        success: function (e) {
            var t = template("indexWares", e);
            a.html(t)
        }
    })
});