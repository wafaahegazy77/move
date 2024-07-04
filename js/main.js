$(document).ready(function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();




    // ---------- to top -----------
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    // -------- parralax img mouse move -------
$(function () {
    
    var b = document.getElementsByTagName("BODY")[0];  

    b.addEventListener("mousemove", function(event) {
    parallaxed(event);

    });

    function parallaxed(e) {
        var amountMovedX = (e.clientX * -0.3 / 8);
        var amountMovedY = (e.clientY * -0.3 / 8);
        var x = document.getElementsByClassName("parallaxed");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
        }
    }
});


});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ testimonials-slider -----------
    var swiper = new Swiper('.pricing-pg-testimonials .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.testimonials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-slider .swiper-button-next',
            prevEl: '.testimonials-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ login .slider-cards -----------
    var swiper = new Swiper('.login .slider-cards', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 500,
        effect: "cards",
        grabCursor: true,
        pagination: {
            el: '.login .slider-cards .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });



});


// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
    });

    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                duration: 2,
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
                // toggleActions: 'play none play reset'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });


    // Create a GSAP timeline
    const tl11 = gsap.timeline();

    // Define the animation
    tl11.from("header .img-side .main-img", {
        x: "-30vw",
        y: 0,
        scale: 0.6,
        duration: 1,
        ease: "none",
        // delay: 1
    });
    tl11.to("header .img-side .main-img", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "none",
        // delay: 1
    });

    // Function to start the animation when the page is fully loaded
    window.addEventListener('load', () => {
        tl11.play();
    });

    // -------
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "header",
            start: "-100 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl1.from("header .shapes", {
        x: 0,
        y: 100,
        scale: 1,
        duration: 15,
        ease: "none",
        delay: 1
    });

    tl1.to("header .shapes", {
        x: 0,
        y: -100,
        scale: 1,
        duration: 15,
        ease: "none",
        delay: 1
    });


    // -------
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl2.from(".services .services-content", {
        x: 0,
        y: -100,
        scale: 0.7,
        duration: 15,
        ease: "none",
        delay: 1
    });

    tl2.to(".services .services-content", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 15,
        ease: "none",
        delay: 1
    });

    // -------
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".features",
            start: "-500 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl3.from(".features .feat-card .icon", {
        x: 0,
        y: 150,
        scale: 0.7,
        duration: 15,
        ease: "none",
        delay: 1
    });

    tl3.to(".features .feat-card .icon", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 15,
        ease: "none",
        delay: 1
    });


    // -------
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".features",
            start: "-500 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl4.from(".features .feat-card", {
        x: 0,
        y: 0,
        scale: 0.9,
        duration: 15,
        ease: "none",
        delay: 1,
    });

    tl4.to(".features .feat-card", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 15,
        ease: "none",
        delay: 1,
    });


    // -------
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "-600 top",
            end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl5.from("footer .main-footer", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1,
        rotationX: 30,
    });

    tl5.to("footer .main-footer", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1,
        rotationX: 0,
    });


    // -------
    const tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".website .imgs",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl6.from(".website .imgs .cir-img", {
        x: -200,
        y: 0,
        scale: 1,
        duration: 100,
        ease: "none",
        delay: 1,
        rotationZ: -90,
    });

    tl6.to(".website .imgs .cir-img", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 100,
        ease: "none",
        delay: 1,
        rotationZ: 0,
    });


    // -------
    const tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".website .imgs",
            start: "-100 bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl7.from(".website .imgs .float-img", {
        x: 0,
        y: 200,
        scale: 1,
        duration: 100,
        ease: "none",
        delay: 1,
    });

    tl7.to(".website .imgs .float-img", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 100,
        ease: "none",
        delay: 1,
    });


    // -------------- animate up
    const tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".anim-up",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl8.from(".anim-up", {
        x: 0,
        y: 100,
        scale: 0.9,
        duration: 15,
        ease: "none",
        delay: 1
    });

    tl8.to(".anim-up", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 15,
        ease: "none",
        delay: 1
    });


    // -------------- animate up
    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".anim-down",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl9.from(".anim-down", {
        x: 0,
        y: -100,
        scale: 0.9,
        duration: 30,
        ease: "none",
        delay: 1
    });

    tl9.to(".anim-down", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1
    });



    // -------------- 
    const tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-pg-form .contact-form",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl10.from(".contact-pg-form .contact-form", {
        x: "-50vw",
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1
    });

    tl10.to(".contact-pg-form .contact-form", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1
    });


    // -------------- 
    const tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".post .main-img",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl12.from(".post .main-img", {
        x: 0,
        y: 0,
        scale: 0.5,
        duration: 30,
        ease: "none",
        delay: 1
    });

    tl12.to(".post .main-img", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1
    });


    // -------------- 
    const tl13 = gsap.timeline({
        scrollTrigger: {
            trigger: ".pricing-pg-table .content .pricing-card",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl13.from(".pricing-pg-table .content .pricing-card", {
        x: 0,
        y: 0,
        scale: 0.8,
        duration: 30,
        ease: "none",
        delay: 1
    });

    tl13.to(".pricing-pg-table .content .pricing-card", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1
    });


    // -------------- 
    const tl14 = gsap.timeline({
        scrollTrigger: {
            trigger: ".pricing-pg-dedication .content",
            start: "top bottom",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl14.from(".pricing-pg-dedication .content", {
        x: 0,
        y: 0,
        scale: 0.8,
        duration: 30,
        ease: "none",
        delay: 1
    });

    tl14.to(".pricing-pg-dedication .content", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 30,
        ease: "none",
        delay: 1
    });


});
