const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]');
    const item = {
        text: text.value,
        done: false
    }

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList (plates = [], platesList) {
   platesList.innerHTML = plates.map( (p, i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${p.done?'checked':''}/>
                <label for="item${i}">${p.text}</label>
            </li>
        `
    }).join('');
}

function toggleDone (e) {
    if (!e.target.matches('input')){
        return;
    }

    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

populateList(items, itemsList);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);