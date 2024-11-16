/* 로케이션 메뉴 */
var locDepList = function () {
  var target = event.target || event.srcElement;
  var $this = $(target);
  var locWrap = $this.closest(".location");
  var locDep = $this.parent();
  var depList = locWrap.find(".list");
  depList.stop().slideUp(200);
  $this
    .next(".list")
    .stop()
    .slideDown(200, function () {
      depList.niceScroll({
        cursorcolor: "#b2b2b2",
        cursorwidth: 2,
        cursorborder: "none",
      });
    })
    .parent()
    .addClass("active")
    .siblings()
    .removeClass("active");
  locDep.off().on("mouseleave", function () {
    depList.stop().slideUp(200, function () {
      depList.getNiceScroll().remove();
      depList.attr("style", "");
    });
  });
};
