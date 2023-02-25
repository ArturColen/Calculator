const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Basic calculator actions
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        }
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        }
        else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector('#theme-toggler');
const calculator = document.querySelector('#calculator');
const body = document.querySelector('body');
const toggleIcon = document.querySelector('#toggler-icon');
let isDark = true;

// Switch between themes
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    body.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};