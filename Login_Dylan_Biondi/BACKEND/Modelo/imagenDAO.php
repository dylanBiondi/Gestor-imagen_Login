<?php
require_once '../Conexion/conexion.php';

class imagen

{

    public function obtener()
    {
        $connection = connection();
        $sql = "SELECT * FROM imagen ";
        $respuesta = $connection->query($sql);
        $imagen = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $imagen;
    }

    public function agregar($Nombre, $imagen){
        $connection = connection();
        $nombre_imagen = $imagen['name'];
        $extension = pathinfo($nombre_imagen, PATHINFO_EXTENSION);
        $sql = "INSERT INTO imagen VALUES(0,'$Nombre', '$extension');";
        $respuesta = $connection->query($sql);
        $id = $connection->insert_id;
        $rutatemporal = $imagen['tmp_name'];
        move_uploaded_file($rutatemporal, "../img/".$id.".".$extension);

        return $respuesta;
    }

}