<?php
header('Content-Type: application/json');

// Include database configuration
include 'config.php';

// Fetch feedback
$sql = "SELECT name, email, message FROM feedback ORDER BY reg_date DESC";
$result = $conn->query($sql);

$feedbacks = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $feedbacks[] = $row;
    }
}

echo json_encode($feedbacks);

$conn->close();
?>
