//your code here
const divs = document.querySelectorAll("div")

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
        const targetDiv = e.target;

        
        const temp = draggedDiv.style.backgroundImage;
        draggedDiv.style.backgroundImage = targetDiv.style.backgroundImage;
        targetDiv.style.backgroundImage = temp;
    });
});