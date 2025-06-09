const signUpNombre = document.getElementById("signup_nombre")
const signUpApellido = document.getElementById("signup_apellido")
const signUpIdentificacion = document.getElementById("signup_identificacion")
const signUpEdad = document.getElementById("signup_edad")
const signUpTelefono = document.getElementById("signup_telefono")
const signUpEmail = document.getElementById("signup_email")
const signUpPassword = document.getElementById("signup_password")

let user = []
console.log(user);

function createUser() {
    const nombreInput = signUpNombre.value  
    const apellidoInput = signUpApellido.value
    const identificacionInput = signUpIdentificacion.value
    const edadInput = signUpEdad.value
    const telefonoInput = signUpTelefono.value
    const emailInput = signUpEmail.value  
    const passwordInput = signUpPassword.value  
    
    const usersLocal = localStorage.getItem("userRegistered") 
    const parseUsers = JSON.parse(usersLocal)
    console.log(parseUsers);

    user.push({
        nombre:nombreInput,
        apellido:apellidoInput,
        identificacion:identificacionInput,
        edad: edadInput,
        telefono: telefonoInput,
        email:emailInput, 
        password: passwordInput,
        favoritos: [] 
    },...parseUsers)
    const stringSignup = JSON.stringify(user)
    localStorage.setItem("userRegistered",stringSignup)
    console.log(user);
    window.location.href = "../pages/login.html"
}

function handleErrors() {
    if (signUpNombre.value === ""){
        alert("Campo nombre requerido")
    } else if (signUpApellido.value === ""){
        alert("Campo apellido requerido")
    } else  if (signUpIdentificacion.value === ""){
        alert("Campo identificación requerido")
    } else if(signUpEdad.value === ""){
        alert("Campo edad requerido")
    } else if (signUpTelefono.value === ""){
        alert("Campo teléfono requerido")
    } else if (signUpEmail.value === ""){
        alert("Campo email requerido")
    } else if (signUpPassword.value === ""){
        alert("Campo contraseña requerido")
    } else {
        createUser()
    }
}
