var nombre = document.getElementById("nombre");
var ocupacion = document.getElementById("ocupacion");

var esMasculino = true;

nombre.addEventListener("click", function() {
    if (esMasculino) {
        nombre.textContent = "Olivia Sykes";
    } else {
        nombre.textContent = "Oliver Sykes";
    }

    esMasculino = !esMasculino;
});

ocupacion.addEventListener("click", function() {
    if (esMasculino) {
        ocupacion.innerHTML = "<strong>Ocupación:</strong> Cantante de la Banda Bring Me The Horizon";
    } else {
        ocupacion.innerHTML = "<strong>Ocupación:</strong> Vocalista de la Banda Bring Me The Horizon";
    }

    esMasculino = !esMasculino;
});

document.getElementById("nombre").innerText = nombre.textContent;
document.getElementById("ocupacion").innerHTML = ocupacion.innerHTML;