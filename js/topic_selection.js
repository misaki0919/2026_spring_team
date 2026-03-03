const inputTopic = document.querySelector(".inputTopic");
const talkBtn = document.querySelector(".talkBtn");

inputTopic.addEventListener("input", () => {
    if (inputTopic.value !== "") {
        talkBtn.classList.add("addBorder");
    } else {
        talkBtn.classList.remove("addBorder");
    }
});

