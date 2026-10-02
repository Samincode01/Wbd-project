<?php
// delete_message.php
require_once 'config.php';

// Get the POST data
$data = json_decode(file_get_contents("php://input"));

// Verify admin password
if (empty($data->password) || $data->password !== $admin_password) {
    echo json_encode(["success" => false, "message" => "Unauthorized: Incorrect password"]);
    exit;
}

// Ensure ID is provided
if (empty($data->id)) {
    echo json_encode(["success" => false, "message" => "Message ID is required"]);
    exit;
}

try {
    $query = "DELETE FROM contact_messages WHERE id = :id";
    $stmt = $conn->prepare($query);
    
    // Sanitize and bind
    $id = htmlspecialchars(strip_tags($data->id));
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Message deleted successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete message"]);
    }
} catch(PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error.", "error" => $e->getMessage()]);
}
?>
