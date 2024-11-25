"use strict"

document.addEventListener("DOMContentLoaded", function () {
    // Crear el formulario
    const formulario = document.createElement("form");
    formulario.id = "formulario";

    // Crear el campo de texto para la fecha
    const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha (DD/MM/YYYY): ";
    const inputFecha = document.createElement("input");
    inputFecha.type = "text";
    inputFecha.id = "fecha";
    inputFecha.placeholder = "DD/MM/YYYY";
    inputFecha.onblur = comprobarFecha; // Validar fecha al perder el foco

    // Crear botón de enviar
    const botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Enviar";
    botonEnviar.addEventListener("click", function (e) {
        e.preventDefault(); // Evitar el envío por defecto del formulario
        if (comprobarFecha()) {
            alert("Formulario enviado con éxito.");
        }
    });

    // Agregar elementos al formulario
    formulario.appendChild(labelFecha);
    formulario.appendChild(inputFecha);
    formulario.appendChild(document.createElement("br")); // Salto de línea
    formulario.appendChild(botonEnviar);

    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(formulario);

    // Función para comprobar la fecha
    function comprobarFecha() {
        const campoFecha = document.getElementById("fecha");
        const fechavalida = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/;

        if (fechavalida.test(campoFecha.value)) {
            console.log("Fecha válida :)");
            return true;
        } else {
            alert("La fecha introducida no es válida (Se admite solamente el formato: DD/MM/YYYY)");
            return false;
        }
    }
});

