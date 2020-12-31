const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav")
const toggleIcon = document.getElementById("toggle-icon")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const textBox = document.querySelectorAll(".text-box")
// Dark or Light Images
// function imageMode(color) {
//     image1.src = `img/undraw_proud_coder_${color}.svg`;
//     image2.src = `img/undraw_feeling_proud_${color}.svg`;
//     image3.src = `img/undraw_conceptual_idea_${color}.svg`;
// }

// Dark Light Mode styles

function toggleDarkLightMode(mode) {
    nav.style.backgroundColor = mode === "dark" ? `rgb(0 0 0 / 50%)` : `rgb(255 255 255 / 50%)`;
    textBox.forEach(element => {
        element.style.backgroundColor = mode === "dark" ? `rgba(216, 187, 255, 0.9)` : `rgb(0 0 0 / 50%)`;

    });
    toggleIcon.children[0].textContent = mode === "dark"  ? 'Dark Mode' : 'Light Mode';
    mode === "dark" ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}
    

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode("dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleDarkLightMode("light");
    }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme
// const currentTheme = localStorage.getItem("theme");
// console.log(currentTheme)
// if (currentTheme) {
//     document.documentElement.setAttribute("data-theme", currentTheme);
//     if (currentTheme === "dark") {
//         toggleSwitch.checked = true;
//         darkMode();
//     } 
// }





