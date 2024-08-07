<?php
require_once '../Modelo/imagenDAO.php';

$funcion = $_GET['funcion'];

switch ($funcion) {

    case "agregar":
        agregar();
        break;


    case "obtener":
        obtener();
        break;

}
function obtener()
{
    $resultado = (new imagen())->obtener();
    echo json_encode($resultado);
}

function agregar()
{
    $nombre = $_POST['nombre'];
    $imagen = $_FILES['imagen'];
    $resultado = (new imagen())->agregar($nombre,$imagen);
    echo json_encode($resultado);
}

?>