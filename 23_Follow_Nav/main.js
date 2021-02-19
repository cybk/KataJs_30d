const triggers = Array.from(document.querySelectorAll('.cool > li'));
const bk = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter () {
    this.classList.add('trigger-enter');
    setTimeout(() => 
        this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    bk.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const coords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const cd = {
        height: coords.height,
        width: coords.width,
        top: coords.top - navCoords.top,
        left: coords.left - navCoords.left
    };
    console.log(cd)

    bk.style.setProperty('width', `${cd.width}px`);
    bk.style.setProperty('height', `${cd.height}px`);
    bk.style.setProperty('transform', `translate(${cd.left}px, ${cd.top}px)`);
}

function handleLeave () {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    bk.classList.remove('open');
}

triggers.forEach((item) => item.addEventListener('mouseenter', handleEnter));
triggers.forEach((item) => item.addEventListener('mouseleave', handleLeave));