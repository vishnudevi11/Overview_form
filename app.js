const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Example route for handling form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log(formData);  // Process form data here

    res.json({ message: 'Form submitted successfully!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
