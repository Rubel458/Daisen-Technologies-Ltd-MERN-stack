(function ($, window, document, undefined) {
    'use strict';
   /*============================================
     hamburger SideBar
     ==============================================*/
        // MOBILE MENU
        $("#right-hamburger").on("click", function () {
            $(".right-slide-show").addClass("show");
            $(".overlay").addClass("active");
        });
        $(".close-nav").on("click", function () {
            $(".right-slide-show").removeClass("show");
            $(".overlay").removeClass("active");
        });
        $(".overlay").on("click", function () {
            $(".right-slide-show").removeClass("show");
            $(".overlay").removeClass("active");
        });
       
       

    
})(jQuery, window, document);

