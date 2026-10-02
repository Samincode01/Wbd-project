<?php
// submit_contact.php
require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
    exit;
}

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
) {
    try {
        $query = "INSERT INTO contact_messages (name, email, organization, message) VALUES (:name, :email, :organization, :message)";
        $stmt = $conn->prepare($query);

        // Sanitize input to prevent SQL injection and XSS
        $name = htmlspecialchars(strip_tags($data->name));
        $email = htmlspecialchars(strip_tags($data->email));
        $organization = htmlspecialchars(strip_tags($data->organization ?? 'Not provided'));
        $message = htmlspecialchars(strip_tags($data->message));

        // Bind parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':organization', $organization);
        $stmt->bindParam(':message', $message);

        // Execute query
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Message sent successfully."]);
        } else {
            echo json_encode(["success" => false, "message" => "Unable to send message."]);
        }
    } catch(PDOException $e) {
        echo json_encode(["success" => false, "message" => "Database error.", "error" => $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Incomplete data. Please fill all required fields."]);
}
?>
