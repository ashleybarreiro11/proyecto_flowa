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
    const nombreValue = nombreProfile.value  || nombreProfile.placeholder
    const apellidoValue = apellidoProfile.value || apellidoProfile.placeholder
    const telefonoValue = telefonoProfile.value || telefonoProfile.placeholder
    const emailValue = emailProfile.value || emailProfile.placeholder
    
    loggedUserJSON.nombre = nombreValue
    loggedUserJSON.apellido = apellidoValue
    loggedUserJSON.telefono = telefonoValue
    loggedUserJSON.email = emailValue
    localStorage.setItem("logged-user", JSON.stringify(loggedUserJSON))

    //findIndex es para buscar según un parámetro específico, nos devuelve la posición que tiene en el array
    const userIndex = parseRegistered.findIndex(item => item.email === loggedUserJSON.email)
    parseRegistered [userIndex] = {
        ...parseRegistered [userIndex], ...loggedUserJSON
    }
    localStorage.setItem("userRegistered", JSON.stringify(parseRegistered))

    confirmationButton.classList.add("disabled")
    nombreProfile.disabled = true
    apellidoProfile.disabled = true
    telefonoProfile.disabled = true
    emailProfile.disabled = true
}

function changePassword() {
    const oldpassword = document.getElementById("contraseña-actual")
    const newpassword = document.getElementById("contraseña-nueva")
    const confirmpassword = document.getElementById("confirmar-contraseña")
    if (oldpassword.value!== loggedUserJSON.password) {alert("Contraseña Incorrecta")}
    else if (newpassword.value!== confirmpassword.value) {alert("Las contraseñas no coinciden")}
    else {loggedUserJSON.password = newpassword.value
        localStorage.setItem("logged-user", JSON.stringify(loggedUserJSON))
        window.location.href = "../pages/profile.html"
    }
}