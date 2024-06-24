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
    //funcion aparecer 
    function Sipop(title, text) {
       const title= document.getElementById("poptitulo").innerHTML = title;
       const text= document.getElementById("poptexto").innerHTML = text;
        document.getElementById("t_c_pop").classList.add('show');
    }
    Sipop()
     //funcion desaparecer 
    function Nopop() {
        document.getElementById("t_c_pop").classList.remove('show');
    }







boton()