document.addEventListener("DOMContentLoaded", () => {
    const encriptarBoton = document.querySelector(".encriptador__texto__boton");
    const desencriptarBoton = document.querySelectorAll(".encriptador__texto__boton")[1];
    const entrada = document.querySelector(".encriptador__texto__entrada");
    const mensaje = document.querySelector(".mostrar__mensaje");
    const alertaVacio = document.querySelector(".Mostrar__alerta");
    const copiarBoton = document.querySelector(".copiar");

    // Función para verificar si el texto contiene mayúsculas
    const tieneMayusculas = (texto) => /[A-Z]/.test(texto);

    // Función para encriptar texto
    const encriptarTexto = (texto) => {
        const encriptado = texto
            .replace(/e/g, "end")
            .replace(/i/g, "ir")
            .replace(/a/g, "ace")
            .replace(/o/g, "orn")
            .replace(/u/g, "uder");
        return encriptado;
    };

    // Función para desencriptar texto
    const desencriptarTexto = (texto) => {
        const desencriptado = texto
            .replace(/end/g, "e")
            .replace(/ir/g, "i")
            .replace(/ace/g, "a")
            .replace(/orn/g, "o")
            .replace(/uder/g, "u");
        return desencriptado.toLowerCase();
    };

    encriptarBoton.addEventListener("click", () => {
        let textoEntrada = entrada.value.trim();

        if (tieneMayusculas(textoEntrada)) {
            alert("El mensaje contiene letras mayúsculas. Por favor, usa solo letras minúsculas.");
        } else if (textoEntrada) {
            mensaje.value = encriptarTexto(textoEntrada.toLowerCase()); // Convertir a minúsculas y encriptar
            alertaVacio.style.display = "none";
            desencriptarBoton.disabled = false;
            entrada.value = ""; // Limpiar el área de entrada
        }
    });

    desencriptarBoton.addEventListener("click", () => {
        const textoEncriptado = mensaje.value.trim();
        if (textoEncriptado) {
            mensaje.value = desencriptarTexto(textoEncriptado);
            entrada.value = mensaje.value; // Mostrar el texto desencriptado en el área de entrada
            desencriptarBoton.disabled = true;
        }
    });

    copiarBoton.addEventListener("click", () => {
        mensaje.select();
        document.execCommand("copy");
        alert("Mensaje copiado al portapapeles");
    });
});
