const divs = Array.from(document.querySelectorAll('div'));

function logText (e) {
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach((item) => item.addEventListener('click', logText, {capture: true}));