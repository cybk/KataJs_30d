const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices () {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .map(vc => `<option value="${vc.name}">${vc.name} (${vc.lang})</option>`)
        .join('');
}

function changeVoice () {
    msg.voice = voices.find(vc => vc.name === this.value);
    toggle();
}

function toggle (startOver = true) {
    speechSynthesis.cancel();
    if (startOver){
        speechSynthesis.speak(msg);
    }
}

function setOption () {
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', changeVoice);
options.forEach((opt) => opt.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));