//your code here
const divs = document.querySelectorAll(".image")

divs.forEach((div)=>{
	div.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", e.target.id);
    });

    
    div.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

   
    div.addEventListener("drop", function (e) {
        e.preventDefault();

        const draggedId = e.dataTransfer.getData("text");

        const draggedDiv = document.getElementById(draggedId);
        const targetDiv = e.currentTarget;
		if (draggedDiv === targetDiv) {
            return;
        }

       const parent = targetDiv.parentNode;

       
        const draggedNext = draggedDiv.nextSibling;
        const targetNext = targetDiv.nextSibling;

    
        parent.insertBefore(draggedDiv, targetNext);
        parent.insertBefore(targetDiv, draggedNext);
    });
});