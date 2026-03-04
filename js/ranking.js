const right1 = document.getElementById("rightArrow");
const left1 = document.getElementById("leftArrow");
const right2 = document.getElementById("rightArrow2");
const left2 = document.getElementById("leftArrow2");
const right3 = document.getElementById("rightArrow3");
const left3 = document.getElementById("leftArrow3");
const slider = document.getElementById("slider");

right1.addEventListener("click", () => {
    slider.classList.add("slid");
});
right2.addEventListener("click", () => {
    slider.classList.add("slid2");
});
left2.addEventListener("click", () => {
    slider.classList.remove("slid");
})
left3.addEventListener("click", () => {
    slider.classList.remove("slid2");
})

