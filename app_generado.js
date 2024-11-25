"use strict"

/***************Añadimos el formulario dinámicamente***********************/


document.addEventListener("DOMContentLoaded", function () {
    //Creamos el formulario:
    const formulario = document.createElement("form");
    formulario.id = "formulario";

    //Creamos los elementos del formulario:
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
    const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha: ";
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

    //Agrego elementos al formulario:
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
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

    /**********************************************************************************/
    //Como no me pide hacer la tabla dinámicamente, dejo esto como en el ejercicio anterior:

    class Empleado{
        #nombre
        #apellido
        #nacimiento
        #sueldo
        #email
        #dni
        #fecha
    
        constructor(nombre, apellido, nacimiento, sueldo, email = "", dni = "", fecha = "") {
            this.#nombre = nombre;
            this.#apellido = apellido;
            this.#nacimiento = nacimiento;
            this.#sueldo = sueldo;
            this.#email = email;
            this.#dni = dni;
            this.#fecha = fecha;
        }
        
    
        toString(){
            return `<tr>
            <td>${this.#nombre}</td>
            <td>${this.#apellido}</td>
            <td>${this.#nacimiento}</td>
            <td>${this.#sueldo}</td>
            <td>${this.#email}</td>
            <td>${this.#dni}</td>
            <td>${this.#fecha}</td>
            </tr>`;
        }
    
        getNombre(){
            return this.#nombre;
        }
        getApellido(){
            return this.#apellido;
        }
        getNacimiento(){
            return this.#nacimiento;
        }
        getSueldo(){
            return this.#sueldo;
        }
        getEmail(){
            return this.#email;
        }
    
        getDni(){
            return this.#dni;
        }
    
        getFecha(){
            return this.#fecha;
        }
    
        
        render(){
            let fila = document.createElement("tr");
    
            let nombre = document.createElement("td");
            let apellido = document.createElement("td");
            let nacimiento = document.createElement("td");
            let sueldo = document.createElement("td");
            let email = document.createElement("td");
            let dni = document.createElement("td");
            let fecha = document.createElement("td");
    
            nombre.textContent = this.#nombre;
            apellido.textContent = this.#apellido;
            nacimiento.textContent = this.#nacimiento;
            sueldo.textContent = this.#sueldo;
            email.textContent = this.#email;
            dni.textContent = this.#dni;
            fecha.textContent = this.#fecha;
    
            fila.appendChild(nombre);
            fila.appendChild(apellido);
            fila.appendChild(nacimiento);
            fila.appendChild(sueldo);
            fila.appendChild(email);
            fila.appendChild(dni);
            fila.appendChild(fecha);
    
            return fila;
        }
    }
    
    let empleados = [
        new Empleado("Paco","Fiestas",1997,33000, "paco@gmail.com", "71945631Ñ"),
        new Empleado("Chindas","Vinto",2001,27000, "chindas@vinto.es"),
        new Empleado("Chingas","Perma",1772,38000),
        new Empleado("Perma","Trago",1991,74000),
        new Empleado("Misty","Articuno",1987,37000),
        new Empleado("Giovanni","Vazquez",1000,20000),
        new Empleado("Lagartijo","Iguano",1993,54000),
    ]
    
    let tabla = document.getElementById("lista-empleados");
    empleados.forEach(empleado =>{
        let fila=empleado.render();
        tabla.appendChild(fila);
    });
    
    // Evento para añadir empleado:
    let boton = document.getElementById("formulario-enviar");
    boton.addEventListener("click", evento => {
        evento.preventDefault();
    
        if (!validarFormulario()) return;
    
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nacimiento = document.getElementById("nacimiento").value;
        let sueldo = document.getElementById("sueldo").value;
        let email = document.getElementById("email").value;
        let dni = document.getElementById("dni").value;
        let fecha = document.getElementById("fecha").value;
    
        let empleado = new Empleado(nombre, apellido, nacimiento, sueldo, email, dni, fecha);
        empleados.push(empleado);
    
        let fila = empleado.render();
        tabla.appendChild(fila);
    });

});