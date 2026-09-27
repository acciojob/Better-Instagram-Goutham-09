const images = document.querySelectorAll(".image");

let draggedDiv = null;

images.forEach(function (image) {

    image.setAttribute("draggable", "true");

    image.addEventListener("dragstart", function (e) {
        draggedDiv = e.currentTarget;
    });

    image.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    image.addEventListener("drop", function (e) {
        e.preventDefault();

        const targetDiv = e.currentTarget;

        if (draggedDiv === targetDiv) {
            return;
        }

        const draggedImage =
            getComputedStyle(draggedDiv).backgroundImage;

        const targetImage =
            getComputedStyle(targetDiv).backgroundImage;

        draggedDiv.style.backgroundImage = targetImage;
        targetDiv.style.backgroundImage = draggedImage;
    });
});