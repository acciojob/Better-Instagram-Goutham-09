const images = document.querySelectorAll(".image");

images.forEach(function (image) {

    
    image.draggable = true;

   
    image.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", e.target.id);
    });


    image.addEventListener("dragover", function (e) {
        e.preventDefault();
    });


    image.addEventListener("drop", function (e) {
        e.preventDefault();

        const draggedId = e.dataTransfer.getData("text/plain");

        const draggedDiv = document.getElementById(draggedId);
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