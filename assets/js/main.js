const swiper = new Swiper(".labSwiper", {

    loop: true,

    slidesPerView: 3,

    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".labSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // Ketika layar berukuran >= 768px (Tablet)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
});