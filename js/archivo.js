let formulario = document.querySelector("form");
let botonIniciarSesion = document.getElementById("boton-iniciar-sesion");
let inputUsuario = document.getElementById("usuario");
let inputContraseña = document.getElementById("password");
let errorUsuario = document.getElementById("error-usuario");
let errorContraseña = document.getElementById("error-contraseña");

console.log(formulario);
console.log(botonIniciarSesion);
console.log(inputUsuario)
console.log(inputContraseña)
console.log(errorUsuario);
console.log(errorContraseña);


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    errorUsuario.textContent = "";
    errorContraseña.textContent = "";
    
    console.log(inputUsuario.value);
    console.log(inputContraseña.value);
    
    if (inputContraseña.value == "") {
        errorContraseña.textContent = "Contraseña incorrecta";
    }
    if (inputUsuario.value == "") {
        errorUsuario.textContent = "Correo incorrecto";
    }
    if(inputUsuario.value != "" && inputContraseña.value != ""){
        formulario.submit();
    }
});

inputUsuario.addEventListener("click", ()=>{
    errorUsuario.textContent = "";
});

inputContraseña.addEventListener("click", ()=>{
    errorContraseña.textContent = "";
});




