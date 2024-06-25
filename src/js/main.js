// Funcion Boton 
function boton(){
const condiciones  = document.getElementById("checkcondiciones");
const enviar = document.getElementById("btnenviar");
//condiciones ?
const cambiarCondiciones = () => { enviar.disabled = !condiciones.checked;};
//mandame a otra pagina
condiciones.addEventListener('change', cambiarCondiciones);
}
// Funcion POPUP
document.addEventListener('DOMContentLoaded', function() {
    function Sipop(title, text) {
        const popTitulo = document.getElementById("poptitulo");
        const popTexto = document.getElementById("poptexto");
        const tCPop = document.getElementById("t_c_pop");

        if (popTitulo && popTexto && tCPop) {
            popTitulo.innerHTML = title;
            popTexto.innerHTML = text;
            tCPop.classList.add('show');
        } 
    }

    function Nopop() {
        const tCPop = document.getElementById("t_c_pop");
        if (tCPop) {
            tCPop.classList.remove('show');
        }
    }

    function togglePopup() {
        const checkbox = document.getElementById("checkcondiciones");
        if (checkbox.checked) {
            Sipop('Terminos y condiciones', 'En un puerto italianoooooo al pieee de las montañaaaas,<br>Vive nuestro amigo marcooooo<br>En una humilde moradaaaaa.');
        } 
    }
    function showTerms() {
        Sipop('Terminos y condiciones', 'En un puerto italianoooooo al pieee de las montañaaaas,<br>Vive nuestro amigo marcooooo<br>En una humilde moradaaaaa.');
    }

    window.Sipop = Sipop; 
    window.Nopop = Nopop; 
    window.togglePopup = togglePopup; 
    window.showTerms = showTerms; e
});








boton()