function boton(){
const condiciones  = document.getElementById("checkcondiciones");
const enviar = document.getElementById("btnenviar");
//condiciones ?
const cambiarCondiciones = () => { enviar.disabled = !condiciones.checked;};
//mandame a otra pagina
condiciones.addEventListener('change', cambiarCondiciones);
}








boton()