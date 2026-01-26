document.addEventListener('DOMContentLoaded', function () {

    // Set year in copyright statement
    (function () {
        var year = document.getElementById('year');

        if (!year) return;

        year.innerHTML = new Date().getFullYear();
    })();
});


document.addEventListener('DOMContentLoaded', function () {

    // Handle scroll triggered animations
    var animateElements = document.querySelectorAll('.animate');

    if (!animateElements) return;

    animateElements.forEach((element) => {
        element.classList.add('prepare');
    });

    const preparedElements = document.querySelectorAll('.prepare');

    if (!preparedElements) return;

    const options = {
        root: null,
        // This creates a trigger line 25% up from the bottom of the screen
        // Format: top, right, bottom, left
        rootMargin: "0px 0px -25% 0px", 
        threshold: 0 
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    preparedElements.forEach(el => observer.observe(el));
});
