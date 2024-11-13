// Admin password
const adminPassword = "bhushitha";

// Function to prompt for the admin password before accessing the page
function adminLogin() {
    const password = prompt("Please enter admin password:");
    if (password === adminPassword) {
        // Display admin container if the password is correct
        document.getElementById("adminContainer").style.display = "block";
        loadUsers();
    } else {
        // Show alert and redirect to the home page if password is incorrect
        alert("Incorrect password!");
        window.location.href = "index.html";
    }
}

// Function to load users from local storage and display them in the admin panel
function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve users or set to empty array if null
    const userList = document.getElementById("userList");
    userList.innerHTML = "<h3>User List:</h3>";

    if (users.length === 0) {
        // Display a message if there are no users
        userList.innerHTML += "<p>No users have signed up yet.</p>";
    } else {
        users.forEach((user) => {
            userList.innerHTML += `
                <div class="user-item">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Address:</strong> ${user.address}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Password:</strong> ${user.password}</p>
                    <p><strong>Bank Details:</strong></p>
                    <ul>
                        <li><strong>Bank Name:</strong> ${user.bankDetails.bankName}</li>
                        <li><strong>Account Number:</strong> ${user.bankDetails.accountNumber}</li>
                        <li><strong>Account Name:</strong> ${user.bankDetails.accountName}</li>
                        <li><strong>Branch:</strong> ${user.bankDetails.branch}</li>
                    </ul>
                    <hr>
                </div>
            `;
        });
    }
}

// Call adminLogin function if admin page is accessed directly
document.addEventListener("DOMContentLoaded", () => {
    adminLogin();
});
