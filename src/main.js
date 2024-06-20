function boton(){
const condiciones  = document.getElementById("condiciones");
const enviar = document.getElementById("enviar");
//condiciones ?
const cambiarCondiciones = () => { enviar.disabled = !condiciones.checked;};
//mandame a otra pagina
condiciones.addEventListener('change', cambiarCondiciones);
}