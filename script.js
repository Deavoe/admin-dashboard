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

