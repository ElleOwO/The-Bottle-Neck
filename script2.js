//
// //reference to main app container
// const notesContainer = document.getElementById("app");
// //ref to add new note, refers to button to add note
// const addNoteButton = notesContainer.querySelector(".add-note")
// //get notes when page loads
// getNotes().forEach(notes => {
//     //properties come from json in local storage
//     const noteElement = createNoteElement(notes.id, notes.content);
//     notesContainer.insertBefore(noteElement, addNoteButton);
// });
//
// addNoteButton.addEventListener("click",()=>addNote());
// //retrieve existing notes from local storage
// //returns array of nodes, javascript array
// function getNotes(){
//     return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
// }
//
// //save notes to local on client browser, takes in array of notes
// function saveNotes(){
// //set notes to keys
//     localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
//
// }
//
// function createNoteElement(id, content) {
//     //adds html element, create a new textarea represents comments
//     const element = document.createElement("textarea"); //javascript representation of text area
//     //yet to be appended to dom
//     element.classList.add("notes");
//     element.value = content;
//     element.placeholder = "Empty Comment";
//
//     //eventlisteners to trigger functions
//     element.addEventListener("change", () =>{
//         updateNote(id, element.value);
//     });
//
//     element.addEventListener("dbclick", ()=>{
//         const doDelete = confirm("Are you sure you want to delete?")
//         if (doDelete){
//             deleteNote(id,element);
//
//         }
//     })
//
//     return element;
//
// }
//
// function addNote(){
//     const notes = getNotes();
//     const noteObject = {
//         id: Math.floor(Math.random()*100000),
//         content: ""
//     };
//
//     const noteElement = createNoteElement(noteObject.id, noteObject.content);
//     notesContainer.insertBefore(noteElement, addNoteButton);
//
//     notes.push(noteObject);
//     saveNotes(notes);
// }
//
// function updateNote(id, newContent){
//     const notes = getNotes();
//     const targetNote = notes.filter(notes => notes.id == id)[0];
//
//     targetNote.content = newContent;
//     saveNotes(notes);
//
// }
//
// function deleteNote(id, element){
//     const notes = getNotes().filter(notes => notes.id != id);
//
//     saveNotes(notes);
//     notesContainer.removeChild(element);
// }
const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Click to edit. Double Click to delete.";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dblclick", () => {
        const doDelete = confirm(
            "Are you sure you wish to delete this comment?"
        );

        if (doDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote() {
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}

function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id == id)[0];

    targetNote.content = newContent;
    saveNotes(notes);
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

