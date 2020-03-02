// console.log("you found me :P")


function fetchColors() {
    fetch("http://localhost:3000/colors/") 
    .then(resp => resp.json())
    .then(json => console.log(json))
}

fetchColors()