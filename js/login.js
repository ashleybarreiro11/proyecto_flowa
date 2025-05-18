const user = [{email:"valentina311@gmail.com", password: "123456"}]

const emaiInput = document.getElementById("input_email")
const passwordInput = document.getElementById("input_password")
const buttonIngresar = document.getElementById("button_ingresar")

function login () {
    window.location.href = "../pages/catalog.html"
}
function verification () {
    if (emaiInput.value === user[0].email, passwordInput.value === user[0].password) {
        login()
    } else if (emaiInput.value != user[0].email) {
        alert("No existe un usuario con este e-mail.")
    } else if (passwordInput.value != user[0].password) {
        alert("Contraseña incorrecta.")
    } 
}
