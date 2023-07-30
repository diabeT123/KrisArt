var aboutSlider = new Swiper('.about__slider', {
    effect: 'fade',
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }


})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


if (window.innerWidth>600) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero', { opacity: 1 }, {

        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'start',



            scrub: true
        }

    },)

    let itemsLeft = gsap.utils.toArray('.works__list-left .works__list-item');
    let itemsRight = gsap.utils.toArray('.works__list-right .works__list-item');
    //Левая галерея
    itemsLeft.forEach(item => {
        gsap.fromTo(item, { x: -150, opacity: 0 }, {

            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-1500',



                scrub: true
            }

        },)

    })
    //Правая галерея

    itemsRight.forEach(item => {
        gsap.fromTo(item, { x: 150, opacity: 0 }, {

            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-900',



                scrub: true
            }

        },)

    })

    //О Кристине 
    gsap.fromTo('.about__content', { x: 200, opacity: 0 }, {

        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.about__content',
            start: '-800',



        }

    },)
    //Слайдер 

    gsap.fromTo('.about__slider', { x: -200, opacity: 0 }, {

        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.about__slider',
            start: '-800',




        }

    },)
    //About секция 

    gsap.fromTo('.about__inner', { y: 0, opacity: 1 }, {

        opacity: 0, y: -200,
        scrollTrigger: {
            trigger: '.about__inner',
            start: '-200',

            scrub: true,


        }

    },)

    //Кисти галерея
    gsap.fromTo('.works__bg-image-1', { x: -100, opacity: 0 }, {

        opacity: 0.2, x: 0,
        scrollTrigger: {
            trigger: '.works__bg-image-1',
            start: '-500',

            scrub: true,


        }

    },)

    //Статуя галерея
    gsap.fromTo('.works__bg-image-2', { x: 100, opacity: 0 }, {

        opacity: 0.2, x: 0,
        scrollTrigger: {
            trigger: '.works__bg-image-2',
            start: '-500',

            scrub: true,


        }

    },)

    //Ангел галерея
    gsap.fromTo('.works__bg-image-3', { y: -200, opacity: 0 }, {

        opacity: 0.2, y: 0,
        scrollTrigger: {
            trigger: '.works__bg-image-2',
            start: '-500',

            scrub: true,


        }

    },)
    // Художница галерея
    gsap.fromTo('.works__bg-image-4', { y: -200, opacity: 0 }, {

        opacity: 0.2, y: 0,
        scrollTrigger: {
            trigger: '.works__bg-image-2',
            start: '-500',

            scrub: true,


        }

    },)
    //Бабочки
    gsap.fromTo('.about__bg-image-1', { y: -200, opacity: 0 }, {

        opacity: 0.2, y: 0,
        scrollTrigger: {
            trigger: '.about',
            start: '-500',

            scrub: true,


        }

    },)

    gsap.fromTo('.about__bg-image-2', { x: -200, opacity: 0 }, {

        opacity: 0.2, x: 0,
        scrollTrigger: {
            trigger: '.about',
            start: '-500',

            scrub: true,


        }

    },)

    gsap.fromTo('.about__bg-image-3', { y: 200, opacity: 0 }, {

        opacity: 0.2, y: 0,
        scrollTrigger: {
            trigger: '.about',
            start: '-900',

            scrub: true,


        }

    },)

    gsap.fromTo('.about__bg-image-4', { x: 200, opacity: 0 }, {

        opacity: 0.2, x: 0,
        scrollTrigger: {
            trigger: '.about',
            start: '-500',

            scrub: true,


        }

    },)

    gsap.fromTo('.about__bg-image-5', { x: 400, opacity: 0 }, {

        opacity: 0.2, x: 0,
        scrollTrigger: {
            trigger: '.about',
            start: '-700',

            scrub: true,


        }

    },)


}

// Анимация попапа

const popup = document.querySelector('.popup');
const popupIcon = document.querySelector('.popup__icon');
const aboutButton = document.querySelector('.about__button');
const overlay = document.querySelector('.overlay') 

aboutButton.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('popup-open');
    overlay.classList.add('overlay-open');
})

popupIcon.addEventListener('click', () => {

    popup.classList.remove('popup-open');
    overlay.classList.remove('overlay-open');

})
