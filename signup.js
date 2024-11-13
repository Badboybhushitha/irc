// signup.js
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const bankName = document.getElementById("bankName").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const accountName = document.getElementById("accountName").value;
    const branch = document.getElementById("branch").value;

    // Create a new user object
    const newUser = {
        name,
        address,
        phone,
        email,
        username,
        password,
        bankName,
        accountNumber,
        accountName,
        branch,
        signupDate: new Date().toLocaleString()  // Store the signup date
    };

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);

    // Save the updated users list back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Send signup details to WhatsApp
    const message = `New Signup:\nName: ${newUser.name}\nUsername: ${newUser.username}\nEmail: ${newUser.email}\nPhone: ${newUser.phone}\nBank: ${newUser.bankName}, ${newUser.accountName}, ${newUser.accountNumber}, Branch: ${newUser.branch}`;
    const whatsappURL = `https://wa.me/94788054702?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Notify the user
    alert("Signup successful! Your details have been saved.");
});
