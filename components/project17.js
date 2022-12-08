document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello woeld!');

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isThrottled = false;


    document.addEventListener('mousewheel', function (e) {
        if (isThrottled) return;
        isThrottled = true;
        
        setTimeout(function () {
            isThrottled = false;
        }, 1000);

        const direction = e.wheelDelta < 0 ? 1 : -1;

        scrool(direction);


    })

    function scrool(direction) {
        if (direction === 1) {
            const isLastection = currentSectionIndex === sections.length - 1;
            if (isLastection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }

        currentSectionIndex = currentSectionIndex + direction;

        scrollToCurrentSection();
    }

    function scrollToCurrentSection() {
        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

})