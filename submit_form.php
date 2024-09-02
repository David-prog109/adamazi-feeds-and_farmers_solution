<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'miminwokafor@gmail.com'; // Replace with your email address
    $subject = 'New Message from ' . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "Failed to send the email. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>

