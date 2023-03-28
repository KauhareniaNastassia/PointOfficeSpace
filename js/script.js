'use strict';

window.addEventListener('DOMContentLoaded', () => {
    fix100vh();
    findHeight();
    animation();
    window.addEventListener('resize', () => {
        fix100vh();
        findHeight();
    })
})

let promo = document.querySelector('.promo');


function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function findHeight(){
    let fullHeight = document.documentElement.clientHeight,
        fullWidth = document.documentElement.clientWidth;
    if(fullWidth > 768 && fullWidth <= 1024){
        if(fullHeight < 730){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth > 576 && fullWidth <= 768){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth <= 576){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } 
}


function animation() {
    gsap.registerPlugin(ScrollTrigger)

    const tlTitle = gsap.timeline({})
   
    tlTitle.from('.promo__title span:first-child', {
        xPercent: 200,
        ease: 'back.out(1.1)',
        duration: 1.5,
    })
    tlTitle.from('.promo__title span:last-child', {
        xPercent: -200,
        ease: 'back.out(1.1)',
        duration: 1.5,
    }, '<')


    const tlPromo = gsap.timeline({
        ScrollTrigger: {
            trigger: '.promo',
            start: 'top top',
            end: '+=50%',
            scrub: 1,
            pin: true
        }
    })
    tlPromo.from('promo__bottom', {
        opacity: 0,
        yPercent: 100
    })
    .fromTo('.promo__bottom img', {y: -155}, {
        y: 30
    }, '<')


    const tlLines = gsap.timeline({
        scrollTrigger: {
            trigger: '.choose__wrap',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    })
    tlLines.to('.choose__wrap .top', {
        xPercent: -70,
    })
    tlLines.to('.choose__wrap .bottom', {
        xPercent: 30,
    }, '<')


    gsap.from('.rates__card', {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.rates__wrap',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    })



}