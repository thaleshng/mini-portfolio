const aboutButton = document.querySelector(".btn-about");
const socialMediaButton = document.querySelector(".btn-social-media");

const aboutSection = document.querySelector(".about");
const socialMediaSection = document.querySelector(".social-media");

function toggleSections(selectedButton, otherButton, selectedSection, otherSection) {
    selectedButton.classList.add("selected");
    otherButton.classList.remove("selected");

    selectedSection.classList.add("selected");
    otherSection.classList.remove("selected");
}

aboutButton.addEventListener("click", () => {
    toggleSections(aboutButton, socialMediaButton, aboutSection, socialMediaSection);
});

socialMediaButton.addEventListener("click", () => {
    toggleSections(socialMediaButton, aboutButton, socialMediaSection, aboutSection);
});