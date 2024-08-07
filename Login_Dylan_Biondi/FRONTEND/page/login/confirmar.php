<?php

session_start();

if (isset($_SESSION['usuario']) === true) {
    echo "Bienvenido " . $_SESSION['usuario'];
} else {
    echo "Error, inicie sesion.";
}


?>