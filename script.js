var perfilCard = document.getElementById("perfil-card");
var nombre = document.getElementById("nombre");
var ocupacion = document.getElementById("ocupacion");

var esMasculino = true;

perfilCard.addEventListener("click", function() {
    if (esMasculino) {
        nombre.textContent = "Olivia Sykes";
        ocupacion.innerHTML = "<strong>Ocupación:</strong> Vocalista de la Banda Bring Me The Horizon";
    } else {
        nombre.textContent = "Oliver Sykes";
        ocupacion.innerHTML = "<strong>Ocupación:</strong> Vocalista de la Banda Bring Me The Horizon";
    }

    esMasculino = !esMasculino;
});