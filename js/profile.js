const loggedUser = localStorage.getItem("logged-user")
console.log(loggedUser);
const loggedUserJSON = JSON.parse(loggedUser)
const nombreProfile = document.getElementById("nombre-profile")

//poner las otras 4

nombreProfile.placeholder = loggedUserJSON.nombre

function edit() {
    nombreProfile.disabled = false
}