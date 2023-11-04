const fileInput = document.getElementById("fileInput");
const changeBackgroundButton = document.getElementById("changeBackgroundButton");

changeBackgroundButton.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url(${imageUrl})`;
    }
});
