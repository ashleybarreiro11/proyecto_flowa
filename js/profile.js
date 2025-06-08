const loggedUser = localStorage.getItem("logged-user")
console.log(loggedUser);
const usersRegistered = localStorage.getItem("userRegistered")
const parseRegistered = JSON.parse(usersRegistered)
const loggedUserJSON = JSON.parse(loggedUser)
const nombreProfile = document.getElementById("nombre-profile")
const apellidoProfile = document.getElementById("apellido-profile")
const telefonoProfile = document.getElementById("telefono-profile")
const emailProfile = document.getElementById("email-profile")
const passwordProfile = document.getElementById("password-profile")
const confirmationButton = document.getElementById("confirmation-button")

nombreProfile.placeholder = loggedUserJSON.nombre
apellidoProfile.placeholder = loggedUserJSON.apellido
telefonoProfile.placeholder = loggedUserJSON.telefono
emailProfile.placeholder = loggedUserJSON.email
passwordProfile.placeholder = loggedUserJSON.password

function edit() {
    confirmationButton.classList.remove("disabled")
    nombreProfile.disabled = false
    apellidoProfile.disabled = false
    telefonoProfile.disabled = false
    emailProfile.disabled = false
    //Lo único que no podría editar desde aquí es password porque tiene un proceso diferente. 
}

function logOut() {
    localStorage.removeItem("logged-user")
    window.location.href = "../index.html"
}

function confirmation() {
    const nombreValue = nombreProfile.value  
    const apellidoValue = apellidoProfile.value 
    const telefonoValue = telefonoProfile.value
    const emailValue = emailProfile.value  

    const userToEdit = parseRegistered.find(item =>
        item.nombre === loggedUserJSON.nombre
    )
    console.log(userToEdit);
    
    userToEdit.nombre = nombreValue
    userToEdit.apellido = apellidoValue
    userToEdit.telefono = telefonoValue
    userToEdit.email = emailValue
    localStorage.setItem("usersRegistered", userToEdit)
}
