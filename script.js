const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener('click',function(){addNote()})

// Function to save note.
const saveNote = ()=>{
    const notes = document.querySelectorAll(".note textarea")
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
    //To save button.
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNote()
        }
    )
    //to del note.
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            saveNote()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNote()
        }
    )
    main.appendChild(note);
    saveNote(); 
}
// To fetch data from localhost.

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
           lsNotes.forEach(
            (lsNotes) => {
                addNote(lsNotes)
            }
           )
        }}
        
)()