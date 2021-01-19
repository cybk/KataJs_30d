/* Get our elements */ 

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



/* Build ouyr functions */
function togglePlay () {
    const method = video.paused ?  'play':'pause';
    video[method]();
}

function updateButton () {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skipping () {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate () {
    video[this.name] = this.value;
}

function handleProgress () {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

progressBar.style.flexBasis = '0%';

/* Hook up the events listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skipping))
ranges.forEach(rn => rn.addEventListener('change', handleRangeUpdate));
ranges.forEach(rn => rn.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) =>  mouseDown && scrub(e));
progress.addEventListener('mousedown', () =>  mouseDown = true );
progress.addEventListener('mouseup', () =>  mouseDown = false );
