// signup.js

function sendSignupDetailsToWhatsApp(user) {
    const message = `New User Registered: \nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nAddress: ${user.address}`;
    const whatsappURL = `https://wa.me/+94788054702?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Call this function after successful registration
function handleSignupFormSubmission() {
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };

    // Save user details, then send to WhatsApp
    saveUser(user);
    sendSignupDetailsToWhatsApp(user);
}
