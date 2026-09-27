const formulario = document.querySelector("form");
const campos = formulario.querySelectorAll("input, select");

campos.forEach(function(campo) {

    campo.addEventListener("input", function() {

        if (campo.checkValidity()) {
            campo.classList.add("campo-sucesso");
            campo.classList.remove("campo-erro");
        } else {
            campo.classList.add("campo-erro");
            campo.classList.remove("campo-sucesso");
        }

    });

});

formulario.addEventListener("submit", function(event) {

    if (!formulario.checkValidity()) {
        event.preventDefault();
    }

});

/* verificação de senha */
const senha = document.querySelector("#senha");
const confirmarSenha = document.querySelector("#confirmar-senha");

confirmarSenha.addEventListener("input", function() {

    if (confirmarSenha.value === senha.value) {
        confirmarSenha.classList.add("campo-sucesso");
        confirmarSenha.classList.remove("campo-erro");
    } else {
        confirmarSenha.classList.add("campo-erro");
        confirmarSenha.classList.remove("campo-sucesso");
    }

});