const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log('pressed', pressed);

    if (pressed.join('').includes(secretCode)){
        console.log('Ding Ding!!!!');
        cornify_add();
    }
});