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
