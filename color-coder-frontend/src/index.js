console.log("you found your index.js file! :P")

// This is our initial "GET" fetch which makes colors and notes data available to THIS index.js file, and thus can be displayed on the DOM.
// I would like to refactor this fetch so that the returned array is saved to a variable, but for now I don't want to think about that. 
function fetchColors() {
    return fetch("http://localhost:3000/colors/") 
    .then(resp => resp.json())
    .then(jsonObj => jsonObj.forEach(obj => addColorToDOM(obj)))
}
fetchColors()


// Add a color to the DOM. This fxn is the callback in our "GET" fetch. This function also adds an event listener to each color-cell.
function addColorToDOM(obj) {
    const colorGrid = document.querySelector("#color-grid")
    const color = document.createElement("div")

    color.id = obj.id
    color.notes = obj.notes
    color.className = "color-cell"
    color.innerText = `– ${obj.name} notes`
    color.style.background = obj.hexcode_i
    color.addEventListener("click", switchToColorShowPage)
    colorGrid.appendChild(color)
}

// This is the callback we pass in to the addEventListener method above, which allows us to move from the index to show page upon user clicking a color cell.
function switchToColorShowPage(event) {
    const allColorsContainer = document.querySelector("#all-colors-container")
    const oneColorContainer = document.querySelector("#one-color-container")

    allColorsContainer.style.display = "none"
    oneColorContainer.style.display = "block"

    event.target.notes.forEach(note => renderNoteOnColorShowPage(note))
}

// This function allows a color's notes to be displayed on the color's show page. 
// It creates elements from keys of the objects returned from our fetch. 

function renderNoteOnColorShowPage(note) {
    const oneColorsNotesContainer = document.querySelector(".color-has-many-notes")
    const newNote = document.createElement("div")
    newNote.className = "note-cell"

    const noteTitle = document.createElement("span")
    noteTitle.className = "note-title"
    noteTitle.innerText = note.title

    const deleteButton = document.createElement("span")
    deleteButton.className = "delete-button"
    deleteButton.innerText = "–DELETE"
    deleteButton.style.color = "white"
    deleteButton.addEventListener("click", (event) => deleteNoteFromDB(event, newNote))

    const br = document.createElement("br")
    const br2 = document.createElement("br")

    const noteContent = document.createElement("span")
    noteContent.className = "note-content"
    noteContent.innerText = note.content

    newNote.id = note.id

    newNote.appendChild(noteTitle)
    newNote.appendChild(deleteButton)
    newNote.appendChild(br)
    newNote.appendChild(br2)
    newNote.appendChild(noteContent)

    oneColorsNotesContainer.appendChild(newNote)
}


const deleteNoteFromDB = (event, newNote) => {
    // console.log("Look at you, you clicked the delete button! I'm proud of you.")
    console.log(event.target.parentNode.id)
    
    const noteID = event.target.parentNode.id

    const url = `http://localhost:3000/notes/${noteID}`
    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    return fetch(url, configObj)
    .then(resp => resp.json())
    .then(jsonObj => removeFromDOM(jsonObj, newNote))
}

const removeFromDOM = (jsonObj, newNote, noteID) => {
    console.log(jsonObj)
    newNote.remove()

}



// This function adds an event listener to the newNoteForm so that when it is submitted a new note is created
function addEventListenerForNewNoteForm() {
    // event here???
    const newNoteForm = document.querySelector("#new-note-form")
    newNoteForm.addEventListener("submit", createNewNote)
}
addEventListenerForNewNoteForm()


// This is the callback passed to the event listener. This callback creates the newNoteObj and 
// then calls another function, postNewNote, to persist the note to the database
function createNewNote(event) {
    event.preventDefault()
    // console.log(event.target.title.value, event.target.content.value)
    const newNoteObj = {}
    newNoteObj.color_id = event.target.color_id.value
    newNoteObj.title = event.target.title.value
    newNoteObj.content = event.target.content.value
    // console.log(newNoteObj) // newNoteObj structure is working: {title: "meh", content: "mehmeh"}
    postNewNote(newNoteObj) // invoking our postNewNote function here
    renderNoteOnColorShowPage(newNoteObj) // recycling this function (finally, learning to recycle!) Mother Earth you fucking owe me. It works!
    // question for later: wtf happened to those pink notes I created before I added this render? Oh lol I mislabeled it white nvm
}

// This function is where we do our "POST" fetch to actually persist the newNote in our database
const postNewNote = (newNoteObj) => {
    const url = "http://localhost:3000/notes/"
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newNoteObj)
    }

    return fetch(url, configObj)
    .then(resp => resp.json())
    .then(jsonObj => console.log(jsonObj))
}

// const newNote = document.createElement 
// this is frontend, I want to do backend first 
// also, I need to know where this note is going, which color, which split screen 
// (are we rendering it immediately in the right-side note detail (not yet setup), or just in the color's notes on left-side)


