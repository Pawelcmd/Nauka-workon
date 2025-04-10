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



document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const button = document.querySelector('#themeToogle');

    const setTheme = (theme) => {
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        button.textContent = theme === 'light' ? 'Tryb ciemny' : 'Tryb jasny';
    };

    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme);

    button.addEventListener('click', () => {
        const newTheme = body.classList.contains('light') ? 'dark' : 'light';
        setTheme(newTheme);
    });


    const counter = document.querySelector('#counter');

    let entryCounter = parseInt(localStorage.getItem('counter')) || 0;

    entryCounter++;
    localStorage.setItem('counter', entryCounter);
    counter.textContent = entryCounter;
});



const list = [-3, 5, 6];


const some = list.some((el) => {
    return el < 0
})

console.log(some);


const namesList = ["Ania", "Hania", "Frania"];

const reduceString = namesList.reduce((acc, el, index) => {
    console.log(index);
    if (index < namesList.length - 1) {
        return acc + el + ", "
    }else {
        return acc + el;
    }
}, "")
console.log(reduceString);

const testString = "Dvcvcsvcdv"
console.log(testString.toUpperCase());

const capitalizedNames = namesList.map((el) => el.toUpperCase())
console.log(capitalizedNames);


