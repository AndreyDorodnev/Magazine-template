$(document).ready(function () {
    $(".slider1").owlCarousel({
        // loop:true,
        margin: 0,
        autoWidth: true,
        nav: true,
        dots: true,
        navText: [],
        items: 5,
        responsive: {
            0: {
                items: 1,
                // loop:true,
                dots: true,
                nav: false
            },
            500: {
                items: 2,
                loop: true,
                dots: true,
                nav: false
            },
            840: {
                items: 4,
                loop: true,
                dots: true,
                nav: false
            },
            1490: {
                items: 5,
                loop: true,
                dots: false,
                nav: false
            }
        }
    });
});

$(document).ready(function () {
    $(".slider2").owlCarousel({
        // loop:true,
        margin: 0,
        autoWidth: true,
        nav: true,
        dots: true,
        navText: [],
        items: 4,
        responsive: {
            0: {
                items: 1,
                // loop:true,
                dots: true,
                nav: false
            },
            500: {
                items: 3,
                loop: true,
                dots: true,
                nav: false
            },
            1490: {
                items: 4,
                loop: false,
                dots: true,
                nav: false
            }
        }
    });
});