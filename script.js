const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("main");

addBtn.addEventListener('click',function(){addNote()});

// Function to add Note.
//  <div class="note">
// <div class="tool">
//     <i class="fas fa-save"></i>
//     <i class="fas fa-trash"></i>
// </div>
// <textarea></textarea>
// </div>
const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    <textarea>${text}</textarea>
    `;
};
// Function to del Note.
const del = () =>{
    const trash = document.querySelector("tarsh");
    trash.addEventListener('click', ()=>{
        note.remove();
        saveNote();
    })
}
// Function for save button.
const save =  ()=>{
    const save = document.querySelector("save");
    saveNote();
}

// Function to save note.
const saveNote = ()=>{
    const notes = document.querySelector("textarea")
    const data = [];
        notes.forEach(note => {
            data.push(note.value);
        });
        if (data.length === 0) {
            localStorage.removeItem("notes")
        } else {
            localStorage.setItem("notes", JSON.stringify(data))
        }
    
}