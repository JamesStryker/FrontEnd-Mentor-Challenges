
/*Change Navbar Color on CLick */
$(document).ready(function(){
    $(".navbar-toggler").on({
        click: function(){
            $(".navbar").toggleClass("navToggle");
        }
    });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
