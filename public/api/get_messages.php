<?php
// get_messages.php
require_once 'config.php';

// Require a password sent via POST to view messages securely
$data = json_decode(file_get_contents("php://input"));

if (empty($data->password) || $data->password !== $admin_password) {
    echo json_encode(["success" => false, "message" => "Unauthorized: Incorrect password"]);
    exit;
}

try {
    $query = "SELECT * FROM contact_messages ORDER BY created_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(["success" => true, "data" => $messages]);
} catch(PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error.", "error" => $e->getMessage()]);
}
?>
