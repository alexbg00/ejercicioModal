console.log("Funcionando el script"); 

function ocultar() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("abrir").style.display = "inline-block";
    document.getElementById("cerrar").style.display = "none";
    return;
}

function mostrar() {
    document.getElementById("modal").style.display = "table";
    document.getElementById("cerrar").style.display = "inline-block";
    document.getElementById("abrir").style.display = "none";

    return;
}

