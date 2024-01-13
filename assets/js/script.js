document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);


    // Set year in copyright statement
    (function () {
        var year = document.getElementById('year');

        if (!year) return;

        year.innerHTML = new Date().getFullYear();
    })();


    // Handle page transitions
    // (function () {
    //     var links = document.querySelectorAll('a[data-transition]');
    //     var page = document.querySelector('.page');

    //     if (!page || !links.length) return;

    //     function enterPage() {
    //         page.classList.add('is-entering');
    //     }
    
    //     function leavePage(url) {
    //         page.classList.remove('is-entering');
    //         page.classList.add('is-leaving');
    
    //         setTimeout(function () {
    //             window.location.href = url;
    //         }, 250);
    //     }

    //     // page.classList.add('is-entering');
    //     enterPage();

    //     links.forEach((element) => {
    //         element.addEventListener('click', function (event) {
    //             event.preventDefault();

    //             if (element.href.includes('#') && element.pathname === window.location.pathname) {
    //                 var targetElement = document.getElementById(element.hash.substring(1));

    //                 if (targetElement) {
    //                     targetElement.scrollIntoView({
    //                         behavior: 'smooth'
    //                     });

    //                     history.pushState(null, null, element.href);
    //                 }
    //             } else if (element.href !== window.location.href) {
    //                 // page.classList.remove('is-entering');
    //                 // page.classList.add('is-leaving');

    //                 // setTimeout(function () {
    //                 //     window.location.href = element.href;
    //                 // }, 250);

    //                 leavePage(element.href);
    //             }
    //         });
    //     });

    //     window.addEventListener('popstate', function (event) {
    //         if (event.state && event.state.page) {
    //             enterPage();
    //         } else {
    //             leavePage(window.location.href);
    //         }
    //     });
    // })();


    // (function () {
    //     var elements = document.querySelectorAll('.about-me h3, .about-me dl');

    //     if (!elements) return;

    //     elements.forEach((element) => {
    //         element.classList.add('animate');
    //     });
    // })();


    // Handle scroll triggered animations
    (function () {
        var animateElements = document.querySelectorAll('.animate');

        if (!animateElements) return;

        animateElements.forEach((element) => {
            element.classList.add('prepare');
        });

        var preparedElements = document.querySelectorAll('.prepare');

        if (!preparedElements) return;

        preparedElements.forEach((element) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: 'top 75%',
                    end: 99999,
                    toggleClass: 'in-view',
                    //markers: true
                }
            });
        });
    })();


    // Handle animating the projects on the homepage
    (function(){
        var container = document.querySelector('.my-work'),
            projects = document.querySelectorAll('.project');

        if (!container || !projects.length) return;

        var initialDelay = 800,
        delayIncrement = 250;

        var FadeInKeyframes = [
            { opacity: 0 },
            { opacity: 1 }
        ];

        var SmoothEntryYKeyframes = [
            { transform: 'translateY(var(--smooth-entry-from, 1rem))' },
            { transform: 'translateY(0)' }
        ];

        function setDelay(delay, index) {
            delay = (initialDelay + delay) + (index * delayIncrement)

            return delay;
        }

        async function cancelAllAnimations(element) {
            var animations = element.getAnimations();

            await Promise.all(animations.map(animation => animation.finished));

            animations.forEach(animation => animation.cancel());
        }

        projects.forEach((project, index) => {
            var projectBackground = project.querySelector('.project__background'),
                projectThumb = project.querySelector('.project__thumb'),
                projectCaption = project.querySelector('.project figcaption');

            if (!container || !projectBackground || !projectThumb || !projectCaption) return;
            
            // Background
            projectBackground.animate(FadeInKeyframes, 
            {
                duration: 250,
                easing: 'ease-out',
                delay: setDelay(0, index),
                fill: 'both'
            }).pause();

            projectBackground.animate(SmoothEntryYKeyframes, 
            {
                duration: 500,
                easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)',
                delay: setDelay(0, index),
                fill: 'both'
            }).pause();

            // Thumb
            projectThumb.animate(FadeInKeyframes, 
            {
                duration: 250,
                easing: 'ease-out',
                delay: setDelay(100, index),
                fill: 'both'
            }).pause();

            projectThumb.animate(SmoothEntryYKeyframes, 
            {
                duration: 500,
                // easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)',
                easing: 'cubic-bezier(0.18, 0.89, 0.67, 1.16)',
                delay: setDelay(100, index),
                fill: 'both'
            }).pause();

            // Caption
            projectCaption.animate(FadeInKeyframes, 
            {
                duration: 250,
                easing: 'ease-out',
                delay: setDelay(200, index),
                fill: 'both'
            }).pause();

            projectCaption.animate(SmoothEntryYKeyframes, 
            {
                duration: 500,
                easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)',
                delay: setDelay(200, index),
                fill: 'both'
            }).pause();

            ScrollTrigger.create({
                trigger: container,
                start: 'top 75%',
                onEnter: () => {
                    for (var i = index; i < index + 3 && i < projects.length; i++) {
                        var inViewElements = projects[i].querySelectorAll('.project__background, .project__thumb, .project figcaption');

                        inViewElements.forEach(element => {
                            element.getAnimations().forEach(animation => animation.play());

                            cancelAllAnimations(element);
                        });
                    }
                },
            });
        });
    })();


    // (function () {
    //     var elements = document.querySelectorAll('.about-me h2, .about-me h3, .about-me p, .about-me dt, .about-me dd');

    //     if (!elements.length) return;

    //     elements.forEach((element) => {
    //         var vh = (coef) => window.innerHeight * (coef/100);
    //         var vw = (coef) => window.innerWidth * (coef/100);

    //         gsap.set(element, { opacity: 0, y: 48 });

    //         gsap.timeline({
    //             defaults: { duration: 1 },
    //             scrollTrigger: {
    //                 trigger: element,
    //                 scrub: true,
    //                 start: 'top bottom',
    //                 end: 'top 60%',
    //                 // markers: true
    //             }
    //         }).to(element, { opacity: 1, y: 0 }, 0);
    //     });
    // })();

});
