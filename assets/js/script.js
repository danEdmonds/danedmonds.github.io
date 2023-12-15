gsap.registerPlugin(ScrollTrigger);


// Set year in copyright statement
(function () {
    var year = document.getElementById('year');

    if (!year) return;

    year.innerHTML = new Date().getFullYear();
})();


// Handle page transitions
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[data-transition]');
    var page = document.querySelector('.page');

    page.classList.add('is-entering');

    if (!page || !links.length) return;

    links.forEach((element) => {
        element.addEventListener('click', function (event) {
            event.preventDefault();

            if (element.href.includes('#') && element.pathname === window.location.pathname) {
                var targetElement = document.getElementById(element.hash.substring(1));

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else if (element.href !== window.location.href) {
                page.classList.remove('is-entering');
                page.classList.add('is-leaving');

                setTimeout(function () {
                    window.location.href = element.href;
                }, 250);
            }
        });
    });
});


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

    var initialDelay = 500,
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
            projectCaption = project.querySelector('.project figcaption'),
            newIndex = 0;

        if (!container || !projectBackground || !projectThumb || !projectCaption) return;

        if ((index - 1) % 3 === 0) {
            newIndex = 2;
        } else if ((index - 2) % 3 === 0) {
            newIndex = 3;
        }

        projectBackground.animate([
            { top: '50%', right: '50%', bottom: '50%', left: '50%', borderRadius: '1.5rem' },
            { top: 'calc(50% - 2rem)', right: '0.5rem', bottom: 'calc(50% - 2rem)', left: '0.5rem', borderRadius: '1.5rem' }
        ], {
            duration: 250,
            easing: 'cubic-bezier(0, 0, 0.4, 1)',
            delay: setDelay(0, newIndex),
            fill: 'both'
        }).pause();

        projectBackground.animate([
            { top: '2rem', right: '-0.25rem', bottom: '2rem', left: '-0.25rem', borderTopLeftRadius: '8rem' }
        ], {
            // duration: 150,
            duration: 250,
            easing: 'cubic-bezier(0.6, 0, 0.96, 0.8)',
            delay: setDelay(200, newIndex),
            fill: 'both'
        }).pause();

        projectBackground.animate([
            { top: '0', right: '0', bottom: '0', left: '0', borderTopLeftRadius: '8rem' }
        ], {
            duration: 250,
            easing: 'cubic-bezier(0.06, 0.2, 0.4, 1)',
            // delay: setDelay(350, newIndex),
            delay: setDelay(450, newIndex),
            fill: 'both'
        }).pause();
    
        projectThumb.animate(FadeInKeyframes, 
        {
            duration: 250,
            easing: 'ease-out',
            // delay: setDelay(350, newIndex),
            delay: setDelay(500, newIndex),
            fill: 'both'
        }).pause();

        projectThumb.animate(SmoothEntryYKeyframes, 
        {
            duration: 500,
            easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)',
            // delay: setDelay(400, newIndex),
            delay: setDelay(500, newIndex),
            fill: 'both'
        }).pause();
    
        projectCaption.animate(FadeInKeyframes, 
        {
            duration: 250,
            easing: 'ease-out',
            delay: setDelay(600, newIndex),
            fill: 'both'
        }).pause();

        projectCaption.animate(SmoothEntryYKeyframes, 
        {
            duration: 500,
            easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)',
            delay: setDelay(600, newIndex),
            fill: 'both'
        }).pause();

        if (index % 3 === 0) {
            ScrollTrigger.create({
                trigger: project,
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
        }
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
