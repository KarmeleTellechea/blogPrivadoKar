//inspeccionar url y coger parametrs
const urlauth = new URLSearchParams(window.location.search);
const label = urlauth.get('id');
console.log(label)

//Vincular el json con js para poder luego mostrar en html
fetch("../articles.json")
    .then((response) => response.json())
    .then((data) => {
        // Aquí puedes acceder y utilizar los datos del archivo JSON
        console.log(data);
    })
    
//vencular objstos del json con objtos de html
const imge= document.getElementById("image")

//sustituir esa image por la image de json.


