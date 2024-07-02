async function verificarlabels() {
//--------------------------------------------------------------------------------inspeccionar url y coger parametrs
    const urlauth = new URLSearchParams(window.location.search);
    const labelURL = urlauth.get('labels');
    const labelsArray = labelURL.split(',').map(label => label.trim());
    console.log('Etiquetas del URL:', labelsArray);;
  
//----------------------------------------------------------------------------------Vincular el json con js para poder luego mostrar en html
    try {
        const response = await fetch("../articles.json");
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
        }
      const data = await response.json();
      const articulos = [...data.natura, ...data.ciudad, ...data.deportes, ...data.arte]; 
//--------------------------------------------------------------------------------- Verificar las credenciales
        const articuloEncontrado = articulos.find(articulo => 
            labelsArray.every(label => articulo.labels.includes(label))
        );
        console.log('Artículos:', articulos);
        console.log('Artículo encontrado:', articuloEncontrado);
    //-----------------------------------------------------------------------Veruficar 
        if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
        }
           
//------------------------------------------------------------------------------vencular objstos del json con objtos de html
if (articuloEncontrado) {
 //------------------------------------------------------------------------------arctualizar
    document.getElementById("imagen").src = articuloEncontrado.image;
    document.getElementById("tituloarticulo").textContent = articuloEncontrado.title;
    document.getElementById("fecha").textContent = articuloEncontrado.date;
    document.getElementById("tituloautor").textContent = articuloEncontrado.author.name;
    document.getElementById("articulocon").textContent = articuloEncontrado.content;
} else {
    alert('No se encontró ningún artículo con la etiqueta especificada.');
}
} catch (error) {
console.error('Error al cargar el archivo JSON:', error);
alert('Hubo un problema al cargar los datos. Por favor, inténtalo de nuevo más tarde.');
}
}
document.addEventListener('DOMContentLoaded', verificarlabels);

//feedback 
document.getElementById('feedback').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('cerrarForm').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});
//cerrar articulo 
document.getElementById('cerrar').addEventListener('click', function() {
    window.location.href = 'blog.html?auth=Ok'; 
});


        
       