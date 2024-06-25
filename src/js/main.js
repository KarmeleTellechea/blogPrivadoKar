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
        document.getElementById("poptitulo").innerHTML = title;
        document.getElementById("poptexto").innerHTML = text;
        document.getElementById("t_c_pop").classList.add('show');
    }
    function Nopop() {
        document.getElementById("t_c_pop").classList.remove('show');
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
    window.showTerms = showTerms; 
});








boton()