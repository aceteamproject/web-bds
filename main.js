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

// SLICK SLIDER
$(".content_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  asNavFor: ".img_control",
});
$(".img_control").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  asNavFor: ".content_slider",
  focusOnSelect: true,
});
// Show hide arrow up-down
$('.panel-heading').click(function(){
  if($(this).find('.fa-angle-down').hasClass('d-none')){
    $(this).find('.fa-angle-down').removeClass('d-none');
    $(this).find('.fa-angle-up').addClass('d-none');
  }
  else{
    $(this).find('.fa-angle-up').removeClass('d-none');
    $(this).find('.fa-angle-down').addClass('d-none');
  }
});