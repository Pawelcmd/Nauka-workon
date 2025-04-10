const changeMessage = document.querySelector('#message');
const btn = document.querySelector('#changeBtn');

changeMessage.textContent = "Hello Word"

btn.addEventListener('click', () => {
    changeMessage.style.color = 'red'
})

//////////////////////////////////////////////////////////



const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#itemInput');
const ul = document.querySelector('#itemList');

function addItem() {
    const value = input.value.trim();

    if (value !== "") {
        const newElement = document.createElement('li');
        newElement.textContent = value;
        ul.appendChild(newElement);
        input.value = '';
    }
}

addBtn.addEventListener('click', addItem);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
    
});


const count = document.querySelector('#count');
const btnCount = document.querySelector('#btnCount');
const numbers = document.querySelector('#numbers')

let clickCount = 0;

btnCount.addEventListener('click', () => {
    clickCount++;
    numbers.textContent = clickCount
})