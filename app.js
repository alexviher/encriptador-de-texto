document.addEventListener("DOMContentLoaded", () => {
    const encriptarBoton = document.querySelector(".encriptador__texto__boton");
    const desencriptarBoton = document.querySelectorAll(".encriptador__texto__boton")[1];
    const entrada = document.querySelector(".encriptador__texto__entrada");
    const mensaje = document.querySelector(".mostrar__mensaje");
    const alertaVacio = document.querySelector(".Mostrar__alerta");
    const copiarBoton = document.querySelector(".copiar");

    const encriptarTexto = (texto) => {
        const encriptado = texto
            .replace(/e/g, "end")
            .replace(/i/g, "iman")
            .replace(/a/g, "ardilla")
            .replace(/o/g, "orca")
            .replace(/u/g, "usar");
        return encriptado;
    };

    const desencriptarTexto = (texto) => {
        const desencriptado = texto
            .replace(/end/g, "e")
            .replace(/iman/g, "i")
            .replace(/ardilla/g, "a")
            .replace(/orca/g, "o")
            .replace(/usar/g, "u");
        return desencriptado;
    };

    encriptarBoton.addEventListener("click", () => {
        const textoEntrada = entrada.value;
        if (textoEntrada) {
            mensaje.value = encriptarTexto(textoEntrada);
            alertaVacio.style.display = "none";
            desencriptarBoton.disabled = false;
            entrada.value = ""; // Limpiar el área de entrada
        }
    });

    desencriptarBoton.addEventListener("click", () => {
        const textoEncriptado = mensaje.value;
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
