console.log("you found your index.js file! :P")

const colors = function fetchColors() {
    return fetch("http://localhost:3000/colors/") 
    .then(resp => resp.json())
    .then(jsonObj => jsonObj.forEach(obj => colorOntoDom(obj)))
}

colors()

function colorOntoDom(obj) {
    createColorObj
}