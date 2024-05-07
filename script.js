
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark mode style

function darkMode() {
    nav.style.backgroundColor = ' rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = ' rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'Assets/images/onlineExam_dark.svg';
    image2.src = 'Assets/images/angular_dark.svg';
    image3.src = 'Assets/images/transferMoney_dark.svg';
}

//  Light mode style
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'Assets/images/onlineExam.svg';
    image2.src = 'Assets/images/angular.svg';
    image3.src = 'Assets/images/transferMoney.svg';
}

//  switchTheme function

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
        lightMode();
    }
}


// Event Listner

toggleSwitch.addEventListener('change', switchTheme);

//  Check Local Storage for theme

const currentTheme = localStorage.getItem('data-theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}


