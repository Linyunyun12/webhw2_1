! function(a) {
    "use strict";
    var n = {
        initialize: function() {
            this.event(), this.hoverDropdown(), this.navbarSticky(), this.navbarScrollspy()
        },
        event: function() {
            var n = a("nav.navbar.bootsnav"),
                o;
            if (n.hasClass("navbar-sticky") && n.wrap("<div class='wrap-sticky'></div>"), n.hasClass("brand-center")) {
                var s = [],
                    e = a("nav.brand-center"),
                    t = e.find("ul.navbar-nav");
                e.prepend("<span class='storage-name' style='display:none;'></span>"), e.find("ul.navbar-nav > li").each(function() {
                    if (a(this).hasClass("active")) {
                        var n = a("a", this).eq(0).text();
                        a(".storage-name").html(n)
                    }
                    s.push(a(this).html())
                });
                var i = s.splice(0, Math.round(s.length / 2)),
                    l = s,
                    r = "",
                    d = function(a) {
                        r = "";
                        for (var n = 0; n < a.length; n++) r += "<li>" + a[n] + "</li>"
                    };
                d(i), t.html(r), e.find("ul.nav").first().addClass("navbar-left"), d(l), t.after('<ul class="nav navbar-nav"></ul>').next().html(r), e.find("ul.nav").last().addClass("navbar-right"), e.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"), e.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"), e.find("ul.navbar-nav > li").each(function() {
                    var n = a("ul.dropdown-menu", this),
                        o = a("ul.megamenu-content", this);
                    n.closest("li").addClass("dropdown"), o.closest("li").addClass("megamenu-fw")
                });
                var c = a(".storage-name").html();
                "" == !c && a("ul.navbar-nav > li:contains('" + c + "')").addClass("active")
            }
            n.hasClass("navbar-sidebar") ? (a("body").addClass("wrap-nav-sidebar"), n.wrapInner("<div class='scroller'></div>")) : a(".bootsnav").addClass("on"), n.find("ul.nav").hasClass("navbar-center") && n.addClass("menu-center"), n.hasClass("navbar-full") ? (a("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"), a(".wrap-full-menu").wrap("<div class='nav-full'></div>"), a("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")) : n.hasClass("navbar-mobile") ? n.removeClass("no-full") : n.addClass("no-full"), n.hasClass("navbar-mobile") && (a(".navbar-collapse").on("shown.bs.collapse", function() {
                a("body").addClass("side-right")
            }), a(".navbar-collapse").on("hide.bs.collapse", function() {
                a("body").removeClass("side-right")
            }), a(window).on("resize", function() {
                a("body").removeClass("side-right")
            })), n.hasClass("no-background") && a(window).on("scroll", function() {
                var n;
                a(window).scrollTop() > 34 ? a(".navbar-fixed").removeClass("no-background") : a(".navbar-fixed").addClass("no-background")
            }), n.hasClass("navbar-transparent") && a(window).on("scroll", function() {
                var n;
                a(window).scrollTop() > 34 ? a(".navbar-fixed").removeClass("navbar-transparent") : a(".navbar-fixed").addClass("navbar-transparent")
            }), a(".btn-cart").on("click", function(a) {
                a.stopPropagation()
            }), a("nav.navbar.bootsnav .attr-nav").each(function() {
                a("li.search > a", this).on("click", function(n) {
                    n.preventDefault(), a(".top-search").slideToggle()
                })
            }), a(".input-group-addon.close-search").on("click", function() {
                a(".top-search").slideUp()
            }), a("nav.navbar.bootsnav .attr-nav").each(function() {
                a("li.side-menu > a", this).on("click", function(n) {
                    n.preventDefault(), a("nav.navbar.bootsnav > .side").toggleClass("on"), a("body").toggleClass("on-side")
                })
            }), a(".side .close-side").on("click", function(n) {
                n.preventDefault(), a("nav.navbar.bootsnav > .side").removeClass("on"), a("body").removeClass("on-side")
            }), a("body").wrapInner("<div class='wrapper'></div>")
        },
        hoverDropdown: function() {
            var n = a("nav.navbar.bootsnav"),
                o = a(window).width(),
                s = a(window).height(),
                e = n.find("ul.nav").data("in"),
                t = n.find("ul.nav").data("out");
            if (o < 991) {
                a(".scroller").css("height", "auto"), a("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"), a("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"), a("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"), a("nav.navbar.bootsnav ul.nav").off("mouseleave"), a(".navbar-collapse").removeClass("animated"), a("nav.navbar.bootsnav ul.nav").each(function() {
                    a(".dropdown-menu", this).addClass("animated"), a(".dropdown-menu", this).removeClass(t), a("a.dropdown-toggle", this).off("click"), a("a.dropdown-toggle", this).on("click", function(n) {
                        return n.stopPropagation(), a(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(e), a(this).closest("li.dropdown").first().toggleClass("on"), !1
                    }), a("li.dropdown", this).each(function() {
                        return a(this).find(".dropdown-menu").stop().fadeOut(), a(this).on("hidden.bs.dropdown", function() {
                            a(this).find(".dropdown-menu").stop().fadeOut()
                        }), !1
                    }), a(".megamenu-fw", this).each(function() {
                        a(".col-menu", this).each(function() {
                            a(".content", this).addClass("animated"), a(".content", this).stop().fadeOut(), a(".title", this).off("click"), a(".title", this).on("click", function() {
                                return a(this).closest(".col-menu").find(".content").stop().fadeToggle().addClass(e), a(this).closest(".col-menu").toggleClass("on"), !1
                            }), a(".content", this).on("click", function(a) {
                                a.stopPropagation()
                            })
                        })
                    })
                });
                var i = function() {
                    a("li.dropdown", this).removeClass("on"), a(".dropdown-menu", this).stop().fadeOut(), a(".dropdown-menu", this).removeClass(e), a(".col-menu", this).removeClass("on"), a(".col-menu .content", this).stop().fadeOut(), a(".col-menu .content", this).removeClass(e)
                };
                a("nav.navbar.bootsnav").on("mouseleave", function() {
                    i()
                }), a("nav.navbar.bootsnav .attr-nav").each(function() {
                    a(".dropdown-menu", this).removeClass("animated"), a("li.dropdown", this).off("mouseenter"), a("li.dropdown", this).off("mouseleave"), a("a.dropdown-toggle", this).off("click"), a("a.dropdown-toggle", this).on("click", function(n) {
                        n.stopPropagation(), a(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(), a(".navbar-toggle").each(function() {
                            a(".fa", this).removeClass("fa-times"), a(".fa", this).addClass("fa-bars"), a(".navbar-collapse").removeClass("in"), a(".navbar-collapse").removeClass("on")
                        })
                    }), a(this).on("mouseleave", function() {
                        return a(".dropdown-menu", this).stop().fadeOut(), a("li.dropdown", this).removeClass("on"), !1
                    })
                }), a(".navbar-toggle").each(function() {
                    a(this).off("click"), a(this).on("click", function() {
                        a(".fa", this).toggleClass("fa-bars"), a(".fa", this).toggleClass("fa-times"), i()
                    })
                })
            } else o > 991 && (a(".scroller").css("height", s + "px"), n.hasClass("navbar-sidebar") ? a("nav.navbar.bootsnav ul.nav").each(function() {
                a("a.dropdown-toggle", this).off("click"), a("a.dropdown-toggle", this).on("click", function(a) {
                    a.stopPropagation()
                }), a(".dropdown-menu", this).addClass("animated"), a("li.dropdown", this).on("mouseenter", function() {
                    return a(".dropdown-menu", this).eq(0).removeClass(t), a(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(e), a(this).addClass("on"), !1
                }), a(".col-menu").each(function() {
                    a(".content", this).addClass("animated"), a(".title", this).on("mouseenter", function() {
                        return a(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(e), a(this).closest(".col-menu").addClass("on"), !1
                    })
                }), a(this).on("mouseleave", function() {
                    return a(".dropdown-menu", this).stop().removeClass(e), a(".dropdown-menu", this).stop().addClass(t).fadeOut(), a(".col-menu", this).find(".content").stop().fadeOut().removeClass(e), a(".col-menu", this).removeClass("on"), a("li.dropdown", this).removeClass("on"), !1
                })
            }) : a("nav.navbar.bootsnav ul.nav").each(function() {
                a("a.dropdown-toggle", this).off("click"), a("a.dropdown-toggle", this).on("click", function(a) {
                    a.stopPropagation()
                }), a(".megamenu-fw", this).each(function() {
                    a(".title", this).off("click"), a("a.dropdown-toggle", this).off("click"), a(".content").removeClass("animated")
                }), a(".dropdown-menu", this).addClass("animated"), a("li.dropdown", this).on("mouseenter", function() {
                    return a(".dropdown-menu", this).eq(0).removeClass(t), a(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(e), a(this).addClass("on"), !1
                }), a("li.dropdown", this).on("mouseleave", function() {
                    a(".dropdown-menu", this).eq(0).removeClass(e), a(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(t), a(this).removeClass("on")
                }), a(this).on("mouseleave", function() {
                    return a(".dropdown-menu", this).removeClass(e), a(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(t), a("li.dropdown", this).removeClass("on"), !1
                })
            }), a("nav.navbar.bootsnav .attr-nav").each(function() {
                a("a.dropdown-toggle", this).off("click"), a("a.dropdown-toggle", this).on("click", function(a) {
                    a.stopPropagation()
                }), a(".dropdown-menu", this).addClass("animated"), a("li.dropdown", this).on("mouseenter", function() {
                    return a(".dropdown-menu", this).eq(0).removeClass(t), a(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(e), a(this).addClass("on"), !1
                }), a("li.dropdown", this).on("mouseleave", function() {
                    a(".dropdown-menu", this).eq(0).removeClass(e), a(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(t), a(this).removeClass("on")
                }), a(this).on("mouseleave", function() {
                    return a(".dropdown-menu", this).removeClass(e), a(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(t), a("li.dropdown", this).removeClass("on"), !1
                })
            }));
            if (n.hasClass("navbar-full")) {
                var l = a(window).height(),
                    r = a(window).width();
                a(".nav-full").css("height", l + "px"), a(".wrap-full-menu").css("height", l + "px"), a(".wrap-full-menu").css("width", r + "px"), a(".navbar-collapse").addClass("animated"), a(".navbar-toggle").each(function() {
                    var n = a(this).data("target");
                    a(this).off("click"), a(this).on("click", function(o) {
                        return o.preventDefault(), a(n).removeClass(t), a(n).addClass("in"), a(n).addClass(e), !1
                    }), a("li.close-full-menu").on("click", function(o) {
                        return o.preventDefault(), a(n).addClass(t), setTimeout(function() {
                            a(n).removeClass("in"), a(n).removeClass(e)
                        }, 500), !1
                    })
                })
            }
        },
        navbarSticky: function() {
            var n = a("nav.navbar.bootsnav"),
                o;
            if (n.hasClass("navbar-sticky")) {
                var s = n.height();
                a(".wrap-sticky").height(s);
                var e = a(".wrap-sticky").offset().top;
                a(window).on("scroll", function() {
                    var o;
                    a(window).scrollTop() > e ? n.addClass("sticked") : n.removeClass("sticked")
                })
            }
        },
        navbarScrollspy: function() {
            var n = a(".navbar-scrollspy"),
                o = a("body"),
                s = a("nav.navbar.bootsnav"),
                e = s.outerHeight();
            if (n.length) {
                o.scrollspy({
                    target: ".navbar",
                    offset: e
                }), a(".scroll").on("click", function(n) {
                    n.preventDefault(), a(".scroll").removeClass("active"), a(this).addClass("active"), a(".navbar-collapse").removeClass("in"), a(".navbar-toggle").each(function() {
                        a(".fa", this).removeClass("fa-times"), a(".fa", this).addClass("fa-bars")
                    });
                    var o = a(window).scrollTop(),
                        e = a(this).find("a"),
                        t = a(e.attr("href")).offset().top,
                        i = a(window).width(),
                        l = s.data("minus-value-desktop"),
                        r = s.data("minus-value-mobile"),
                        d = s.data("speed");
                    if (i > 992) var c = t - l;
                    else var c = t - r;
                    a("html, body").stop().animate({
                        scrollTop: c
                    }, d)
                });
                var t = function() {
                        var a = o.data("bs.scrollspy");
                        a && (e = s.outerHeight(), a.options.offset = e, o.data("bs.scrollspy", a), o.scrollspy("refresh"))
                    },
                    i;
                a(window).on("resize", function() {
                    clearTimeout(a);
                    var a = setTimeout(t, 200)
                })
            }
        }
    };
    a(document).ready(function() {
        n.initialize()
    }), a(window).on("resize", function() {
        n.hoverDropdown(), setTimeout(function() {
            n.navbarSticky()
        }, 500), a(".navbar-toggle").each(function() {
            a(".fa", this).removeClass("fa-times"), a(".fa", this).addClass("fa-bars"), a(this).removeClass("fixed")
        }), a(".navbar-collapse").removeClass("in"), a(".navbar-collapse").removeClass("on"), a(".navbar-collapse").removeClass("bounceIn")
    })
}(jQuery);