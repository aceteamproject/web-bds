$(".block").click(function () {
  $(".main-menu-mobile").animate({ right: "0" });
  $("body,html").css("overflow-y", "hidden");
});

$(".fa-times").click(function () {
  $(".main-menu-mobile").animate({ right: "-50%" });
  $("body,html").css("overflow-y", "unset");
});
