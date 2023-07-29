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


if (1) {

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

let popup = document.querySelector('.popup');
let aboutButton = document.querySelector('.about__button');

aboutButton.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('popup-open');
})

const addPrefix = (array, prefix) => {

    for (let i = 0; i < array.length; i++) {

        array[i] = `${prefix} ${array[i]}`

    }
    return array;
}

let array = [1, 2, 3, 4];
let prefix = 'Muradik';
console.log(addPrefix(array, prefix));