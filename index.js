const note = document.getElementById("text-area");
const addBtn = document.getElementById("add-btn");
const parentContainer = document.querySelector(".container-notes");

addBtn.addEventListener("click", function(){

    if(note.value === ""){
        alert("Please enter a note")
    }else{
        // parent div
        let container = document.createElement("div");
        container.classList.add("container")
        
        // header of the note
        let containerHeader = document.createElement("div");
        containerHeader.classList.add("container-header");
        container.appendChild(containerHeader);

        let title = document.createElement("h3");
        title.classList.add("note-title");
        title.innerText = "Note";
        containerHeader.appendChild(title);

        let deleteBtn = document.createElement("span")
        deleteBtn.innerHTML = `<span>&times;</span>`
        deleteBtn.classList.add("delete-btn")
        containerHeader.appendChild(deleteBtn);
        
        deleteBtn.addEventListener("click", function(){

            deleteBtn.parentElement.parentElement.remove();
        })
        
        let text = document.createElement("p");
        text.innerHTML = `${note.value}`;
        container.appendChild(text);

        let viewBtn = document.createElement("button");
        viewBtn.innerText = "View Detail";
        viewBtn.classList.add("view-button");
        container.appendChild(viewBtn);

        viewBtn.addEventListener("click", function(){
            
            let modal = document.createElement("div");
            modal.classList.add("modal");

            let detailedText = document.createElement("p");
            detailedText.innerHTML = `${text.innerText}`;
            modal.appendChild(detailedText);

            let closeBtn = document.createElement("button");
            closeBtn.innerText = "Close";
            modal.appendChild(closeBtn);

            closeBtn.addEventListener("click", function(){
                
                closeBtn.parentElement.remove()
            })

            parentContainer.appendChild(modal);
        })

        parentContainer.appendChild(container); 
    }

    note.value = "";
})
