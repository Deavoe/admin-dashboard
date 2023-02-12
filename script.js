function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getLightnessOfRGB(rgbString) {
    const rgbIntArray = (rgbString.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e)));
    const highest = Math.max(...rgbIntArray);
    const lowest = Math.min(...rgbIntArray);
    return (highest + lowest) / 2 / 255;
  }

function RandomColor(icon) {
    icon.style.backgroundColor = getRandomColor()
    if (getLightnessOfRGB(icon.style.backgroundColor) < .31 ) { // Invert avatar if the bg color is too dark
        let tc = icon.querySelector('.p-icon')
        tc.classList.add("invert")
    }
}

// Create and display 12 projects
let projects = 12
let pc = document.querySelector('.project-container')
var div = document.querySelector('.project')
for (let i = 1; i<projects; i++) {
    clone = div.cloneNode(true); // true = clone all childNodes and event handlers
    pc.appendChild(clone);
}

// Create and display a random number of randomized trending projects
let profiles = Math.floor(Math.random() * 25);
let tc = document.querySelector('.trending-projects')
var di = document.querySelector('.t-profile')

let username = di.querySelector(".username")
username.textContent = "@username" + Math.floor(Math.random() * 99999);

let icon = di.querySelector(".avatar")
RandomColor(icon)

for (let i = 1; i<projects; i++) {
    clone = di.cloneNode(true); // true = clone all childNodes and event handlers
    let username = clone.querySelector(".username")
    username.textContent = "@username" + Math.floor(Math.random() * 99999)

    let icon = clone.querySelector(".avatar")
    RandomColor(icon)

    tc.appendChild(clone);
}

// Force some hover animations
function simHover(e) {
    e.target.classList.toggle("sb-hover");
    // e.target.parentElement.querySelector([type='a']).classList.toggle("sb-hover")
}
document.querySelector(".sb_dashboard").addEventListener("mouseenter",simHover)
document.querySelector(".sb_dashboard").addEventListener("mouseleave",simHover)
document.querySelectorAll(".sb-icon").forEach((el) => el.parentElement.addEventListener("mouseenter",simHover));
document.querySelectorAll(".sb-icon").forEach((el) => el.parentElement.addEventListener("mouseleave",simHover));

document.querySelector(".show-notif").addEventListener("mouseenter", function(e) {
    e.target.parentElement.querySelector([type='p']).classList.toggle("hidden")
})
document.querySelector(".show-notif").addEventListener("mouseleave", function(e) {
    e.target.parentElement.querySelector([type='p']).classList.toggle("hidden")
})

