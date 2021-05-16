$(".block").click(function () {
  $(".main-menu-mobile").animate({ right: "0" });
  $("body,html").css("overflow-y", "hidden");
});

$(".fa-times").click(function () {
  $(".main-menu-mobile").animate({ right: "-100%" });
  $("body,html").css("overflow-y", "unset");
});

if ($(window).width() <= 768) {
  $("#header .header-mb").removeClass("container");
  $("#header .header-mb").addClass("container-fluid");
}

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    // console.log("okokokok");
    $(".sticky-menu").addClass("fixed-header");
    $(".main-menu li a").addClass("color-sticky");
    $(".scroll-ontop").addClass("show");
  } else {
    $(".sticky-menu").removeClass("fixed-header");
    $(".main-menu li a").removeClass("color-sticky");
    $(".scroll-ontop").removeClass("show");
  }
});

// SCROLL ON TOP
$(".scroll-ontop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "300");
});
