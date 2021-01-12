const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
    const now = new Date();
    const second = now.getSeconds();
    const secondsDegree = ((second/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const mins = now.getMinutes();
    const minsDegree = ((mins/60)*360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`

    const hour = now.getHours();
    const hoursDegree = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate, 1000);