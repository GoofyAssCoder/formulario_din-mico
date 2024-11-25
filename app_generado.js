"use strict"

document.addEventListener("DOMContentLoaded", function () {
    //Creamos el formulario:
    const formulario = document.createElement("form");
    formulario.id = "formulario";

    //Creamos la tabla:
    const tabla = document.createElement("table");
    formulario.id = "tabla";

    const labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre: ";
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";

    /**********************************************************************/
    const labelApellido = document.createElement("label");
    labelApellido.textContent = "Apellido: ";
    const inputApellido = document.createElement("input");
    inputApellido.type = "text";
    inputApellido.id = "apellido";

    /**********************************************************************/
    const labelNacimiento = document.createElement("label");
    labelNacimiento.textContent = "Nacimiento: ";
    const inputNacimiento = document.createElement("input");
    inputNacimiento.type = "number";
    inputNacimiento.id = "nacimiento";

    /**********************************************************************/
    const labelSueldo = document.createElement("label");
    labelSueldo.textContent = "Sueldo: ";
    const inputSueldo = document.createElement("input");
    inputSueldo.type = "number";
    inputSueldo.id = "sueldo";

    /**********************************************************************/
    //Crear el campo de texto para la fecha
    const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha (DD/MM/YYYY): ";
    const inputFecha = document.createElement("input");
    inputFecha.type = "text";
    inputFecha.id = "fecha";
    inputFecha.placeholder = "DD/MM/YYYY";
    inputFecha.onblur = comprobarFecha; // Validar fecha al perder el foco

    /**********************************************************************/

    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email: ";
    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "email";
    inputEmail.onblur = comprobarEmail; 

    /**********************************************************************/

    const labelDNI = document.createElement("label");
    labelDNI.textContent = "DNI: ";
    const inputDNI = document.createElement("input");
    inputDNI.type = "text";
    inputDNI.id = "dni";
    inputDNI.onblur = comprobarDNI;

    /**********************************************************************/

    //Botón de enviar:
    const botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Enviar";
    botonEnviar.addEventListener("click", function (e) {
        e.preventDefault(); // Evito el envío por defecto
        if (comprobarFecha()) {
            alert("Formulario enviado con éxito.");
        }
    });

    //Agrego elemento al formulario
    formulario.appendChild(labelNombre);
    formulario.appendChild(inputNombre);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelApellido);
    formulario.appendChild(inputApellido);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelNacimiento);
    formulario.appendChild(inputNacimiento);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelSueldo);
    formulario.appendChild(inputSueldo);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelFecha);
    formulario.appendChild(inputFecha);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelEmail);
    formulario.appendChild(inputEmail);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelDNI);
    formulario.appendChild(inputDNI);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(botonEnviar);

    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(formulario);

    //Funciones de validación:
    function comprobarEmail() {
        var campoEmail = document.getElementById("email");
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        if (validEmail.test(campoEmail.value)) {
            console.log("Email válido :)");
            return true;
        } else {
            alert("El email introducido no es válido");
            return false;
        }
    }
    
    function comprobarDNI() {
        var campoDNI = document.getElementById("dni");
        var DNIvalido = /^[0-9]{8}[A-Z]$/;
    
        if (DNIvalido.test(campoDNI.value)) {
            console.log("DNI válido :)");
            return true;
        } else {
            alert("El DNI introducido no es válido");
            return false;
        }
    }

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

