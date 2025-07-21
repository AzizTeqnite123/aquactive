document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".bannerSlider");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                direction: "horizontal",
                slidesPerView: 1,
                effect: "fade",
                speed: 1000,
                allowTouchMove: false,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
            });
        });
    };
    MultipleSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".collectionSliderBundle");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                effect: 'slide',
                speed: 1000,
                allowTouchMove: false,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
                breakpoints: {
                    150: {
                        slidesPerView: 1.4,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            });
        });
    };
    MultipleSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".collectionSlider");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                effect: 'slide',
                speed: 1000,
                allowTouchMove: false,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
                breakpoints: {
                    150: {
                        slidesPerView: 1.4,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                }
            });
        });
    };
    MultipleSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".prodCardSlider");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                effect: 'slide',
                speed: 1000,
                allowTouchMove: false,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
                breakpoints: {
                    150: {
                        slidesPerView: 1.3,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 2.5,
                        spaceBetween: 15
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }
            });
        });
    };
    MultipleSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".womenResultSlider").forEach((slider, index) => {
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
            effect: 'slide',
            speed: 1000,
            centeredSlides: true,
            grabCursor: true,
            breakpoints: {
                150: { slidesPerView: 1.3, spaceBetween: 10 },
                576: { slidesPerView: 2.1, spaceBetween: 15 },
                769: { slidesPerView: 3.2, spaceBetween: 15 },
                1025: { slidesPerView: 3.9, spaceBetween: 20 },
            },
        });
    });
});
