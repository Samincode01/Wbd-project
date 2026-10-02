<?php
// config.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// --- DATABASE SETTINGS ---
// Change these to match the MySQL database you create in cPanel
$host = "localhost";
$db_name = "your_cpanel_db_name";
$username = "your_cpanel_db_user";
$password = "your_cpanel_db_password";

// --- ADMIN DASHBOARD PASSWORD ---
// You will use this password to log into the Admin Dashboard
$admin_password = "change_this_to_a_secure_password"; 

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $exception) {
    // If connection fails, output error cleanly
    echo json_encode(["success" => false, "message" => "Connection error: " . $exception->getMessage()]);
    exit;
}
?>
