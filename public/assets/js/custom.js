$(document).ready(function () {
  $(".toggle-sidenav").click(function () {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
  function toggleNav() {
    if ($("#site-wrapper").hasClass("show-nav")) {
      // Do things on Nav Close
      $("#site-wrapper").removeClass("show-nav");
    } else {
      // Do things on Nav Open
      $("#site-wrapper").addClass("show-nav");
    }

    //$('#site-wrapper').toggleClass('show-nav');
  }
});
