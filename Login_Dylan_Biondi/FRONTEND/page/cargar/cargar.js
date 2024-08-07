window.onload=()=> {
    enviarimagen();
}


    function enviarimagen() {

        let formularioElement = document.querySelector("#formulario_img");
        formularioElement.onsubmit = async (e) =>{
            e.preventDefault();

        let formularioElement = new FormData(formularioElement);
        let url ="https://localhost/Gestor_imagen/BACKEND/Controlador/imagen.php?funcion=agregar";
        
        let config = {
            method: "POST",
            body:formData
        }

        let respuesta = await fetch(url,config);
        let datos = await respuesta.json();
        console.log(datos);
    
    }




    }