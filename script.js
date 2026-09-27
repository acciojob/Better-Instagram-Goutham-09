const images = document.querySelectorAll(".image");
let draggedDiv=null
divs.forEach(function (div) {

    div.draggable = true;

    div.addEventListener("dragstart", function (e) {
        draggedDiv = e.currentTarget;
    });

    div.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    div.addEventListener("drop", function (e) {
        e.preventDefault();

        const targetDiv = e.currentTarget;

        if (draggedDiv === targetDiv) {
            return;
        }

        
        const draggedContent = draggedDiv.innerHTML;

       
        const targetContent = targetDiv.innerHTML;

      
        draggedDiv.innerHTML = targetContent;
        targetDiv.innerHTML = draggedContent;
    });
});