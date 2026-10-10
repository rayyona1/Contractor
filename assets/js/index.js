const mySwiper1 = new Swiper('.mySwiper1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 65,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 65,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 65,
        },
    },

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});
