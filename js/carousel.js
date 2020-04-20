$(document).ready(function(){
    $(".slider1").owlCarousel({
    // loop:true,
    margin:0,
    autoWidth:true,
    nav:true,
    dots:true,
    navText:[],
    responsive:{
        0:{
            items:5,
            loop:true,
            dots:true,
            nav:false
        }

    }
});
});
