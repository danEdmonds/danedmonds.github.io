document.addEventListener('DOMContentLoaded', function () {

    // Set year in copyright statement
    (function () {
        var year = document.getElementById('year');

        if (!year) return;

        year.innerHTML = new Date().getFullYear();
    })();
});


document.addEventListener('DOMContentLoaded', function () {

    const animateElements = document.querySelectorAll('[data-animate]');

    if (!animateElements.length) return;

    const postsContainer = document.querySelector('.posts');

    if (postsContainer) {
        const rect = postsContainer.getBoundingClientRect();
        const containerAboveFold = rect.top < window.innerHeight * 0.25;

        if (containerAboveFold) {
            animateElements.forEach(el => el.dataset.animate = 'done');
            return;
        }
    } else {
        animateElements.forEach(el => el.dataset.animate = 'done');
        return;
    }

    animateElements.forEach(el => el.dataset.animate = 'prepare');

    const preparedElements = document.querySelectorAll('[data-animate="prepare"]');

    if (!preparedElements.length) return;

    const options = {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.dataset.animate = 'in-view';

                entry.target.addEventListener('animationend', () => {
                    entry.target.dataset.animate = 'done';
                }, { once: true });

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    preparedElements.forEach(el => observer.observe(el));
});
