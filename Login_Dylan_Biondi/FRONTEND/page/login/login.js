window.onload = ()=>{


    const form = document.querySelector("#login")
    form.onsubmit= function(event){
    event.preventDefault();
    obtenerusuario();
    }
     async function obtenerusuario(){
        let url = "http://localhost/Gestor-imagen-main/BACKEND/Controlador/controlador.php?function=obtenerUsuario";
        const data= new FormData(form)
        try {
            let consulta = await fetch(url, {
                method: "post",
                body: data
            });
            let datos = await consulta.json();
            setLocalstorage(datos);
            console.log(datos);
            
            
        }  catch (error) {
            console.error('Error:', error);
        }
    }
}
function setLocalstorage(usuario){
    usuario= JSON.stringify(usuario);
    localStorage.setItem("usuario", usuario);
}