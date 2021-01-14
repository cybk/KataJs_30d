const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck (e) {
    // check if they are pressing Shift key down

    let inBetween = false;
    if (e.shiftKey && this.checked){
        checkboxes.forEach((item) => {
            if (item === this || item === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                item.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(chk => chk.addEventListener('click', handleCheck));