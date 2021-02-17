const triggers = Array.from(document.querySelectorAll('a'));

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlighLink () {
    const linkCoords = this.getBoundingClientRect();

    const cords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    console.log(cords);

    highlight.style.width = `${cords.width}px`;
    highlight.style.height = `${cords.height}px`;
    highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
}

triggers.forEach((item) => item.addEventListener('mouseenter', highlighLink));