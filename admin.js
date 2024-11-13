const adminPassword = "bhushitha";

function adminLogin() {
    const password = prompt("Please enter admin password:");
    if (password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect password!");
        window.location.href = "index.html";
    }
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
    userList.innerHTML = "<h3>User List:</h3>";

    if (users.length === 0) {
        userList.innerHTML += "<p>No users have signed up yet.</p>";
    }

    users.forEach((user, index) => {
        userList.innerHTML += `
            <div class="user-item">
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Phone Number:</strong> ${user.phone}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Bank Name:</strong> ${user.bankName}</p>
                <p><strong>Account Number:</strong> ${user.accountNumber}</p>
                <p><strong>Account Name:</strong> ${user.accountName}</p>
                <p><strong>Branch:</strong> ${user.branch}</p>
                <hr>
            </div>
        `;
    });
}

// Load users when the admin page is loaded
window.onload = function() {
    loadUsers();
};
