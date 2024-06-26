//logueate primero
const urlauth = new URLSearchParams(window.location.search);
const authen = urlauth.get('auth');
if (!authen) {
    alert('Registrate');
    window.location = 'loging.html';}
// articulos blog 

    document.addEventListener('DOMContentLoaded', function () {
        const contenedorArticulos = document.getElementById('contenedorArticulos');
        const lista = document.getElementById('lista');

        cargarArticulos();//para ver si funciona
    
        //  cargar todos los artículos
        function cargarArticulos() {
            fetch('../articles.json') 
                .then(response => response.json())
                .then(data => {
                    renderizarArticulos(data.natura);//natura por que es lo que tengo
                    agregarEventosFiltros(data); 
                })
                .catch(error => console.error('Error al cargar el JSON:', error));
        }
    
        // renderizar los artículos 
        function renderizarArticulos(articulos) {
            contenedorArticulos.innerHTML = ''; 
    
            articulos.forEach(articulo => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article-card');
    
                articleDiv.innerHTML = `
                    <img src="${articulo.image}" alt="${articulo.title}">
                `;
    
                contenedorArticulos.appendChild(articleDiv);
            });
        }
    
        // Función para agregar eventos a los filtros
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
    
