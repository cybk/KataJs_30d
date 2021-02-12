const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo () {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        }).catch(err => {
            console.error('Oh no!!!!', err);
        })
}

function paintCanvas () {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    
    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16)
}

function takePhoto () {
    // Played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('images/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handosome');
    link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Handsome Man"/>`;
    strip.insertBefore(link, strip.firstChild); 
}

getVideo();

video.addEventListener('canplay', paintCanvas);