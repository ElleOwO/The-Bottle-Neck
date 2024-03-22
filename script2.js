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

const allTextareas = document.querySelectorAll('textarea');

allTextareas.forEach(textarea => {
    // Set minimum height to the height of the last line of text
    textarea.style.padding = "20px";
    textarea.style.minHeight = (textarea.scrollHeight ) + "px";
});
function createNoteElement(id, content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Click to edit. Double Click to delete.";

    element.style.height = "min-content"; // Set initial height to fit content


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



    element.addEventListener("input", () => {
        resizeTextarea(element);
    });

    element.addEventListener("blur", () => {
        element.style.height = "min-content"; // Reset the height
        location.reload();

    });
    return element;

}

function resizeTextarea(textarea) {
    textarea.style.height = "auto"; // Reset the height
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height based on content
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

