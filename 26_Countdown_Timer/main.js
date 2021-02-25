let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = Array.from(document.querySelectorAll('[data-time]'));

function timer (seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    clearInterval(countDown);

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then -  Date.now()) / 1000);
        if (secondsLeft < 0){
            clearInterval(countDown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft (seconds) {
    const mins = Math.floor(seconds / 60);
    secs = seconds % 60;
    const display = `${mins}:${secs < 10 ? '0' : ''}${secs}`
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime (timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    endTime.textContent = `Be Back at ${hour}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer () {
    timer(this.dataset.time);
}

buttons.forEach(b => b.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', ev => {
    ev.preventDefault();
    timer(document.customForm.minutes.value * 60);
    document.customForm.reset();
})