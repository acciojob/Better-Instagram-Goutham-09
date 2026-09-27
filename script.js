const images = document.querySelectorAll(".image");

images.forEach(function (image) {

    image.setAttribute("draggable", "true");

    // When dragging starts
    image.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", e.currentTarget.id);
    });

    // Allow dropping
    image.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    // When dropped
    image.addEventListener("drop", function (e) {
        e.preventDefault();

        const draggedId = e.dataTransfer.getData("text/plain");

        const draggedDiv = document.getElementById(draggedId);
        const targetDiv = e.currentTarget;

        if (draggedDiv === targetDiv) {
            return;
        }

        // Get current images
        const draggedBackground =
            window.getComputedStyle(draggedDiv).backgroundImage;

        const targetBackground =
            window.getComputedStyle(targetDiv).backgroundImage;

        // Swap images
        draggedDiv.style.backgroundImage = targetBackground;
        targetDiv.style.backgroundImage = draggedBackground;
    });
});