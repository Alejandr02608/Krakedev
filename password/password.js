function validarPassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
        return false;
    }
    if (!/[a-z]/.test(password)) {
        alert("La contraseña debe contener al menos una letra minúscula.");
        return false;
    }
    if (!/[0-9]/.test(password)) {
        alert("La contraseña debe contener al menos un digito.");
        return false;
    }
    if (!/[*_-]/.test(password)) {
        alert("La contraseña debe contener al menos un caracter especial como * o -.");
        return false;
    }
    return true;
}

function ejecutarValidacion() {
    if (validarPassword()) {
        alert("Contraseña válida.");
    } else {
        alert("Contraseña inválida.");
    }
    }