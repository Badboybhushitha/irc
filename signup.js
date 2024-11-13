function sendSignupDetailsToWhatsApp(user) {
    const message = `New User Registered: \nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nAddress: ${user.address}\n\nBank Details:\nBank Name: ${user.bankName}\nAccount Number: ${user.accountNumber}\nAccount Name: ${user.accountName}\nBranch: ${user.branch}`;
    const whatsappURL = `https://wa.me/+94788054702?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function handleSignupFormSubmission(event) {
    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        bankName: document.getElementById('bankName').value,
        accountNumber: document.getElementById('accountNumber').value,
        accountName: document.getElementById('accountName').value,
        branch: document.getElementById('branch').value
    };

    // After saving user details, send to WhatsApp
    sendSignupDetailsToWhatsApp(user);
        }
