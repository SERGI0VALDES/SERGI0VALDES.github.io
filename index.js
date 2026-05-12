// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const btn = document.querySelector(".ver-imagenes");
    const span = document.querySelector(".close-modal");

    // Verificar que los elementos existan antes de asignar eventos
    if (btn && modal && span) {
        
        // Abrir modal al hacer clic
        btn.onclick = function() {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Evita el scroll al fondo
        }

        // Cerrar modal al hacer clic en la (X)
        span.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Devuelve el scroll
        }

        // Cerrar modal al hacer clic fuera de la caja blanca
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }
});