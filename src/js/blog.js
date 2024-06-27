import { miComponenteWeb } from './componente.js';

window.customElements.define('custom-tag', miComponenteWeb);


document.addEventListener('DOMContentLoaded', function () {
    const contenedorArticulos = document.getElementById('contenedorArticulos');
    const lista = document.getElementById('lista');

    cargarArticulos();

    function cargarArticulos() {
        fetch('../articles.json')
            .then(response => response.json())
            .then(data => {
                renderizarArticulos(data.natura);
                agregarEventosFiltros(data);
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    }

    function renderizarArticulos(articulos) {
        contenedorArticulos.innerHTML = '';

        articulos.forEach(articulo => {
            const articleElement = document.createElement('custom-tag');
            
            articleElement.setAttribute('image-src', articulo.image);
           
            contenedorArticulos.appendChild(articleElement);
        });
    }

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

