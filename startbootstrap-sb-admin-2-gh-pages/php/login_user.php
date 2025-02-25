<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tienda";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$email = $_POST['email'];
$password = $_POST['password'];

// Consultar la base de datos para verificar las credenciales del usuario
$sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Iniciar sesión y redirigir al usuario a la página principal
    header("Location: ../index.html");
    exit();
} else {
    // Redirigir al usuario de vuelta a la página de inicio de sesión con un mensaje de error
    header("Location: ../login.php?message=Credenciales incorrectas");
    exit();
}

$conn->close();
?>