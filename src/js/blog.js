import { miComponenteWeb } from './componente.js';

window.customElements.define('custom-tag', miComponenteWeb);
//-----------------------------------------------------------logueate primer
const urlauth = new URLSearchParams(window.location.search);
const authen = urlauth.get('auth');
if (!authen) {
    alert('Registrate');
    window.location = 'loging.html';}
//-----------------------------------------------------------pilla el contenedor y las listas
document.addEventListener('DOMContentLoaded', function () {
    const contenedorArticulos = document.getElementById('contenedorArticulos');
    const lista = document.getElementById('lista');
//----------------------------------------------------------al iniciar empieza con natura 
    cargarArticulos();
    function cargarArticulos() {
        fetch('../articles.json')
            .then(response => response.json())
            .then(data => {
                renderizarArticulos(data.natura);
                agregarEventosFiltros(data);
            })    
    }
//----------------------------------------------------------renderiza los web compnentes arriba importados 
    function renderizarArticulos(articulos) {
        contenedorArticulos.innerHTML = '';//-----------------refresca
        //----------------------------------------------------por cada articulo creame un custom-tag
        articulos.forEach(articulo => {
            const articleElement = document.createElement('custom-tag');
            
            articleElement.setAttribute('image-src', articulo.image);
            //---------------------------------------------------levame a otro html
            articleElement.addEventListener('click', function () {
                window.location.href =  `articulos.html?id=${articulo.labels}`;
              
                //------------------------------------------------seguramente tendre que llevame el tag o id para identificar 
            });
            contenedorArticulos.appendChild(articleElement);
        });
    }
//--------------------------------------------------------------------filtralos por datos
    function agregarEventosFiltros(data) {
        lista.addEventListener('click', function (event) {
            event.preventDefault();
            if (event.target.tagName === 'A') {
                const categoria = event.target.dataset.category;
                const articulosFiltrados = data[categoria];

                renderizarArticulos(articulosFiltrados);
            }
        });
    }
});

