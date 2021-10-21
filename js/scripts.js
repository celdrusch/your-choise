$(document).ready(function () {
  //Инициализируем стайлер для селектов
  if ($(".formstyller-style").length > 0) {
    setTimeout(function () {
      $(".formstyller-style").css("visibility", "visible");
    }, 500);
    $(".formstyller-style").styler();
  }

  //Стилизируем шапку при скроле
  function fixedHeader() {
    var topp = 1;
    function fixScroll() {
      if (window.scrollY > topp) {
        $(".header").addClass("fixed");
      }
      if (window.scrollY < topp) {
        $(".header").removeClass("fixed");
      }
    }

    fixScroll();

    $(window).scroll(function () {
      fixScroll();
    });
  }
  fixedHeader();

  $(window).resize(function () {
    fixedHeader();
  });

  //Слайдер с баннерами
  $(".banners-slider").on("init", function (event, slick) {
    $(this).css("visibility", "visible");
  });
  if ($(".banners-slider").length > 0) {
    $(".banners-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
    });
  }

  //Выбор целы
  $(".target-checkbox__input").click(function (e) {
    let targetInput = $(this);
    if (targetInput.prop("checked")) {
      targetInput
        .closest(".step-block")
        .find(".target-checkbox")
        .removeClass("active");
      targetInput
        .closest(".step-block")
        .find(".target-checkbox")
        .find(".target-checkbox__chosing")
        .text("Выбрать");
      targetInput.closest(".target-checkbox").addClass("active");
      targetInput.siblings(".target-checkbox__chosing").text("Выбрано");
    } else {
      targetInput.siblings(".target-checkbox__chosing").text("Выбрать");
    }
  });

  //Слайдер с блюдами
  $(".menu-slider").on("init", function (event, slick) {
    $(this).css("visibility", "visible");
  });
  if ($(".menu-slider").length > 0) {
    $(".menu-slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 700,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  //Слайдер с отзывами
  $(".reviews-slider").on("init", function (event, slick) {
    $(this).css("visibility", "visible");
  });
  if ($(".reviews-slider").length > 0) {
    $(".reviews-slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 700,
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  // Аккордеон с ответами на вопросы
  $(".faq-akkordeon__link").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".faq-akkordeon__content").slideToggle();
  });

  //Скролл к блоку
  $("a.go").click(function (e) {
    e.preventDefault();
    $(".header-menu-wrp").removeClass("visible");
    let $t = $(this),
      id = $t.attr("href");
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - 20,
      },
      1200
    );
  });

  //Делаем маску для телефона
  if ($("input[type=tel]").length > 0) {
    $("input[type=tel]").inputmask("+7 (999) 999-99-99");
    $("input[type=tel]").inputmask({
      clearIncomplete: true,
    });
  }

  //Открываем и закрываем меню на мобилке
  $(".open-menu").click(function (e) {
    e.preventDefault();
    $(".header-menu-wrp").addClass("visible");
  });

  $(".close-menu").click(function (e) {
    e.preventDefault();
    $(".header-menu-wrp").removeClass("visible");
  });
});
