const emaiInput = document.getElementById("input_email")
const passwordInput = document.getElementById("input_password")
const buttonIngresar = document.getElementById("button_ingresar")
const getLocal = localStorage.getItem("userRegistered")

const user = localStorage.getItem("userRegistered")
const userObj = JSON.parse(user)

function loginUser() {
    let userToLogin = userObj.find(element => element.email === emaiInput.value);
      if (!userToLogin) {
        alert("No existe alguien con este correo.")
      } else {
        let userString = JSON.stringify(userToLogin)
        localStorage.setItem("logged-user", userString)
      } 
    if (userToLogin.password === passwordInput.value) {
        window.location.href = "../pages/catalog.html"
    } else {
        alert("Contraseña incorrecta.")
    }
} 
