document.getElementById('pluginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const formData = {
        name: name,
        email: email
    };

    // Example: Sending form data to your Node.js backend
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
