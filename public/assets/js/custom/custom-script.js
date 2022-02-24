$(document).ready(function(){
    // Owlcarousel
    $(".owl-carousel").owlCarousel({
        center: true,
        autoWidth:true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        center: true,
        navText: [
            "<span class='material-icons-round btn-control'>chevron_left</span>",
            "<span class='material-icons-round btn-control'>chevron_right</span>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
});