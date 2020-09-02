$(document).ready(function(){
   menu();
   search();
   sort();
});

function menu() {
   $(".burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".menu, .burger").length) {
         if ($(".header").hasClass("mob-menu")) {
            $(".header").removeClass("mob-menu");
         }
      }
   });
}

function search() {
   $(".mob-search-btn, .close-btn").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-search')) {
            $parent.removeClass('mob-search');
         } else {
            $parent.addClass('mob-search');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".mob-search-btn, .close-btn, .delete-btn, .search").length) {
         if ($(".header").hasClass("mob-search")) {
            $(".header").removeClass("mob-search");
         }
      }
   });
}

function sort() {
   $(".sort-right").on('click', function () {
         var $parent = $(".sort");
         if ($parent.hasClass('sort-menu')) {
            $parent.removeClass('sort-menu');
         } else {
            $parent.addClass('sort-menu');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".sort-right").length) {
         if ($(".sort").hasClass("sort-menu")) {
            $(".sort").removeClass("sort-menu");
         }
      }
   });
}