window.itcast = {
    addTransitionEnd: function (n, t) {
        n && "object" == typeof n && (n.addEventListener("transitionEnd", function () {
            t && t()
        }), n.addEventListener("webkitTransitionEnd", function () {
            t && t()
        }))
    },
    tap: function (n, t) {
        var e = !1,
            i = 0;
        n.addEventListener("touchstart", function (n) {
            i = Date.now()
        }), n.addEventListener("touchmove", function (n) {
            e = !0
        }), n.addEventListener("touchend", function (n) {
            0 == e && Date.now() - i <= 150 && t && t(n), e = !1
        })
    }
};