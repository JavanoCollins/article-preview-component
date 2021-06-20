const shareIconsDiv = document.querySelector(".share-icons");
const shareIcon = document.querySelector("#share-icon");

const mobileShareIconsDiv = document.querySelector(".mobile-share-icons");
const mobileShareIcon = document.querySelector("#mobile-share-icon");

const icons = ["facebook", "pinterest", "twitter"];

const toggleOpacity = (e) => {
    e.classList.toggle("toggle-opacity");
};

const toggleDispay = (e) => {
    e.classList.toggle("toggle-display")
}

for (let i = 0; i < icons.length; i++) {
    shareIconsDiv.innerHTML += `<img class='icon' src="./images/icon-${icons[i]}.svg"/>`;
}

for (let i = 0; i < icons.length; i++) {
    mobileShareIconsDiv.innerHTML += `<img class='icon mobile-icon' src="./images/icon-${icons[i]}.svg"/>`;
}

shareIcon.addEventListener("click", (e) => {
    return toggleOpacity(shareIconsDiv);
});

mobileShareIcon.addEventListener("click", (e) => {
    return toggleDispay(mobileShareIconsDiv);
});
