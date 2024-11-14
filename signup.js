document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        bankDetails: {
            bankName: document.getElementById('bankName').value,
            accountNumber: document.getElementById('accountNumber').value,
            accountName: document.getElementById('accountName').value,
            branch: document.getElementById('branch').value
        }
    };

    // Send data to the server
    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert('Signup successful! Details sent to WhatsApp.');
    } else {
        alert('Signup failed.');
    }
});
