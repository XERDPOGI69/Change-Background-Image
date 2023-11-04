const fileInput = document.getElementById("fileInput");
const changeBackgroundButton = document.getElementById("changeBackgroundButton");

const savedBackgroundImage = localStorage.getItem("backgroundImage");
if (savedBackgroundImage) {
    document.body.style.backgroundImage = savedBackgroundImage;
}

changeBackgroundButton.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url(${imageUrl})`;

        // Save the background image URL to localStorage
        localStorage.setItem("backgroundImage", `url(${imageUrl})`);
    }
});

