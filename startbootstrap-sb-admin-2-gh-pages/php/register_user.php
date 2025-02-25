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
$nombre = $_POST['nombreForm'];
$apellido = $_POST['apellidoForm'];
$email = $_POST['emailForm'];
$password = $_POST['exampleInputPassword']; // No encriptar la contraseña

// Insertar datos en la tabla de usuarios
$sql = "INSERT INTO usuarios (nombre, apellido, email, password) VALUES ('$nombre', '$apellido', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    // Redirigir a la página de inicio de sesión con un mensaje de éxito
    header("Location: ../login.php?message=Usuario registrado exitosamente");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>