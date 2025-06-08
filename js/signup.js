const signUpNombre = document.getElementById("signup_nombre")
const signUpApellido = document.getElementById("signup_apellido")
const signUpIdentificacion = document.getElementById("signup_identificacion")
const signUpEdad = document.getElementById("signup_edad")
const signUpTelefono = document.getElementById("signup_telefono")
const signUpEmail = document.getElementById("signup_email")
const signUpPassword = document.getElementById("signup_password")

let user =[]
console.log(user);

function handleErrors() {
    if (signUpNombre.value === ""){
        alert("Campo nombre incompleto")
    } else if (signUpApellido.value === ""){
        alert("Campo apellido incompleto")
    } //completar los que faltan 
}

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
        favoritos: [ { }] 
    },...parseUsers)
    const stringSignup = JSON.stringify(user)
    localStorage.setItem("userRegistered",stringSignup)
    console.log(user);
}

