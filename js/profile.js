const loggedUser = localStorage.getItem("logged-user")
console.log(loggedUser);
const loggedUserJSON = JSON.parse(loggedUser)
const nombreProfile = document.getElementById("nombre-profile")
const apellidoProfile = document.getElementById("apellido-profile")
const telefonoProfile = document.getElementById("telefono-profile")
const emailProfile = document.getElementById("email-profile")
const passwordProfile = document.getElementById("password-profile")
//poner las otras 4

nombreProfile.placeholder = loggedUserJSON.nombre
apellidoProfile.placeholder = loggedUserJSON.apellido
telefonoProfile.placeholder = loggedUserJSON.telefono
emailProfile.placeholder = loggedUserJSON.email
passwordProfile.placeholder = loggedUserJSON.password

function edit() {
    nombreProfile.disabled = false
    apellidoProfile.disabled = false
    telefonoProfile.disabled = false
    emailProfile.disabled = false
    nombreProfile.disabled = false
    //Lo único que no podría editar desde aquí es password porque tiene un proceso diferente. 
}