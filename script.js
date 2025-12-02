var perfilCard = document.getElementById("perfil-card");
var nombre = document.getElementById("nombre");
var ocupacion = document.getElementById("ocupacion");

var esMasculino = true;

perfilCard.addEventListener("click", function() {
    if (esMasculino) {
        nombre.textContent = "Olivia Sykes";
        ocupacion.innerHTML = "<strong>Ocupación:</strong> Vocalista de la Banda Bring Me The Horizon";
        alert("Se cambió el perfil a femenino.")
    } else {
        nombre.textContent = "Oliver Sykes";
        ocupacion.innerHTML = "<strong>Ocupación:</strong> Vocalista de la Banda Bring Me The Horizon";
        alert("Se cambió el perfil a masculino.")
    }

    esMasculino = !esMasculino;
})