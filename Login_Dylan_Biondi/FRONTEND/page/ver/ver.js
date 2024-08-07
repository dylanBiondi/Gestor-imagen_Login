windows.onload = ()=> {
    obtenerimagen();
}


function mostrarimagen(imagen) {
    let imagenesElement = document.querySelector("#contenidoimagen");
    imagenesElement.innerHTML="";
    imagen.array.forEach(imagen => {
        let imgSrc = `../BACKEND/img/${imagen.id}.${imagen.extension}`;
        console.log('Ruta imagen:', imgSrc);

        imagenesElement.innerHTML+=`

        <div>
            <img src="${imgSrc}" alt="${imagen.nombre}">

            <p>${imagen.nombre}</p>
        </div>
        `
    });
}

async function obtenerimagen() {
    let url = "http://localhost/Gestor_imagen/BACKEND/Controlador/imagen.php?funcion=obtener";
    try {
        let consulta = await fetch(url);
        let datos = await consulta.json();
        console.log('datos:', datos);

        mostrarimagen(datos);
    } catch (error) {
        console.error('Error:', error);
    }
    }

