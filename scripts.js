// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedbackDiv = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            feedbackDiv.textContent = 'Please fill out all fields.';
            feedbackDiv.style.color = 'red';
            return;
        }

        // Create a FormData object
        const formData = new FormData(form);

        // Send the data using fetch
        fetch('submit_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            feedbackDiv.textContent = 'Thank you for your message!';
            feedbackDiv.style.color = 'green';
            form.reset(); // Reset the form fields
        })
        .catch(error => {
            feedbackDiv.textContent = 'There was a problem with your submission. Please try again.';
            feedbackDiv.style.color = 'red';
            loadingIndicator.style.display = 'none'; // Hide loading indicator
        });
    });
});
