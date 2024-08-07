<?php

session_start();

$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];

 if($usuario === "Dylan" && $contraseña === "123456789")
    {
        session_start();
        $_SESSION['usuario'] = $usuario;
        $_SESSION['contraseña'] = $contraseña;
    }
    else
{
        echo "Error";
}

?>