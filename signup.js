function sendSignupDetailsToWhatsApp(user) {
    const message = `New User Registered: \nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nAddress: ${user.address}\n\nBank Details:\nBank Name: ${user.bankName}\nAccount Number: ${user.accountNumber}\nAccount Name: ${user.accountName}\nBranch: ${user.branch}`;
    const whatsappURL = `https://wa.me/+94788054702?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function saveUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function handleSignupFormSubmission(event) {
    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        bankName: document.getElementById('bankName').value,
        accountNumber: document.getElementById('accountNumber').value,
        accountName: document.getElementById('accountName').value,
        branch: document.getElementById('branch').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    // Save user details locally for the Admin page and send to WhatsApp
    saveUserToLocalStorage(user);
    sendSignupDetailsToWhatsApp(user);

    alert("Signup successful! User details have been saved.");
}

document.getElementById('signupForm').addEventListener('submit', handleSignupFormSubmission);
