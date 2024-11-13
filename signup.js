document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect user input
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Collect bank details
    const bankDetails = {
        bankName: document.getElementById("bankName").value,
        accountNumber: document.getElementById("accountNumber").value,
        accountName: document.getElementById("accountName").value,
        branch: document.getElementById("branch").value
    };

    // Create a user object with all details
    const newUser = { name, address, phone, email, username, password, bankDetails };

    // Save to local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "index.html";
});
