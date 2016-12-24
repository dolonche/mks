$(document).ready(function () {
    $(".catalog-button").click(function () {
        $(".inner-catalog .main-catalog").slideToggle();
    })
    $(".arrow").click(function () {
        $(".catalog-2-level").slideToggle();
    })
    $(".catalog-button-2").click(function () {
        $(".inner-catalog-2 .main-catalog-2").slideToggle();
    })
    $(".arrow-2").click(function () {
        $(".catalog-2-level-2").slideToggle();
    })
    $(".brand-button").click(function () {
        $(".brands-list").slideToggle();
    })
    $(".mini-menu").click(function () {
        $(".main-navigation ul").slideToggle();
    })
    $(".main-navigation-wrapper-2").click(function () {
            $(".main-navigation-2 ul").animate({
                width: 'toggle'
            });
        })
        //    $(".search-2 span").click(function () {
        //		$(".search-2 input").animate({
        //			width: 'toggle'
        //		});
        //	})
        //       $(".search-2 i").click(function () {
        //		$(".search-2 input").animate({
        //			width: 'toggle'
        //		});
        //	})
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.bottom-line-header-2').addClass('fixed');
            $('.search-2').addClass('block');
            $('.number-phone-2').addClass('block');
            $('.cart-2').addClass('block');
            $('.main-navigation-wrapper-2').addClass('block');
            $('.catalog-button-2').addClass('block');
            $('.main-navigation-2 li').addClass('block');
        } else {
            $('.bottom-line-header-2').removeClass('fixed');
            $('.bottom-line-header-2').removeClass('fixed');
            $('.search-2').removeClass('block');
            $('.number-phone-2').removeClass('block');
            $('.cart-2').removeClass('block');
            $('.main-navigation-wrapper-2').removeClass('block');
            $('.catalog-button-2').removeClass('block');
            $('.main-navigation-2 li').removeClass('block');
        }
    });
    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({
        until: austDay,
        format: 'yowdHMS'
    });
    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();
    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".top_mnu").navigation();
    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function (direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        };
    }, {
        offset: 100
    });
    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $(".search-2").click(function () {
        $.scrollTo($(".form input"), 800, {
            offset: -90
        });
    });
    $(".search-2").click(function () {
        $(".form input").focus()
    });
    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        dots: true,
        items: 1
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function () {
        owl.trigger("owl.prev");
    });
    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });
});
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".main-navigation-wrapper-2");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
        });
    }

})();