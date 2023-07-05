


let sliderElemnt = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%^&*("
let novaSenha = "";

sizePassword.innerHTML = sliderElemnt.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElemnt.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }

    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    console.log("Cliquei!");
    const passwordElement = document.getElementById("password");
    const novaSenha = passwordElement.innerText;

    navigator.clipboard.writeText(novaSenha)
        .then(() => {
            alert("Senha copiada com sucesso!");
        })
        .catch((error) => {
            alert("Erro ao copiar senha: " + error);
        });
}

