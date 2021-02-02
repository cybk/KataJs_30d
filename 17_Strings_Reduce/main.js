const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(tc => {
        const [mins, seconds] = tc.split(':').map(parseFloat);
        return mins * 60 + seconds;
    })
    .reduce((tot, sec) => tot + sec);

    let secleft = seconds
    const hours = Math.floor(secleft / 3600);
    secleft = secleft % 3600;
    const mins = Math.floor(secleft / 60);
    secleft = secleft % 60;

    console.log('Total time: ', `${hours}:${mins}:${secleft}`);
    
