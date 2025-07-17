AOS.init(
    {
        // once: true,
    }
);

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".bannerSlider", {
        slidesPerView: 1,
        effect: "fade",
        speed: 1000,
        allowTouchMove: false,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".collectionSliderBundle", {
        effect: 'slide',
        slidesPerView: 3,
        spaceBetween: 20, allowTouchMove: false,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".collectionSlider", {
        effect: 'slide',
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".prodCardSlider", {
        effect: 'slide',
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".womenResultSlider").forEach((slider, index) => {
        const prevArrow = slider.parentElement.querySelector(".prev");
        const nextArrow = slider.parentElement.querySelector(".next");
        const wrapper = slider.querySelector(".swiper-wrapper");
        const slides = slider.querySelectorAll(".swiper-slide");
        const clones = parseInt(slider.dataset.cloneMultiplier, 10) || 2;
        for (let i = 0; i < clones; i++) {
            slides.forEach((s) => wrapper.appendChild(s.cloneNode(true)));
        }
        console.log(
            `Slider #${index + 1}: total slides ${wrapper.querySelectorAll(".swiper-slide").length
            }`
        );
        new Swiper(slider, {
            direction: "horizontal",
            loop: true,
            speed: 1000,
            // autoplay: { delay: 0, disableOnInteraction: false },
            centeredSlides: true,
            grab: true,
            navigation: { nextEl: nextArrow, prevEl: prevArrow },
            breakpoints: {
                150: { slidesPerView: 1.2, spaceBetween: 20 },
                576: { slidesPerView: 2, spaceBetween: 20 },
                769: { slidesPerView: 3.3, spaceBetween: 20 },
                1025: { slidesPerView: 3.9, spaceBetween: 20 },
            },
        });
    });
});