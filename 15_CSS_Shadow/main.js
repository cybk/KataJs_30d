const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200;

function shadow (e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y }  = e;

    if (this !== e.target){
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(255, 0, 255, 0.2), ${xWalk * -1}px ${yWalk}px 0 rgb(0, 255, 255, 0.2)`;
}

hero.addEventListener('mousemove', shadow);