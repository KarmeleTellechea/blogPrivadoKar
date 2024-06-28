async function verificarlabels() {
//--------------------------------------------------------------------------------inspeccionar url y coger parametrs
    const urlauth = new URLSearchParams(window.location.search);
    const labels = urlauth.get('id');
    console.log(labels)
//----------------------------------------------------------------------------------Vincular el json con js para poder luego mostrar en html
    try {
        const response = await fetch("../articles.json");
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
        }
        const data = await response.json();
        const articulos = data.natura;
// Verificar las credenciales
let verify = articulos.some(articulo => 
    articulo.labels.some(label => labels.includes(label))
  );

    /* .then((data) => {
            // Aquí puedes acceder y utilizar los datos del archivo JSON
            console.log(data);
        })*/
    console.log(articulos)
    console.log(verify)
        if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
        }
        
    
   
// verificar que el url y el json son iguales.

    //  console.log(verify);
//vencular objstos del json con objtos de html
const imge= document.getElementById("image")
}catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    alert('Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
  }
  }
  verificarlabels()
//sustituir esa image por la image de json.


