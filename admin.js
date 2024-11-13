// admin.js
window.onload = function() {
    loadUsers();
};

// Load users from localStorage and display them in the admin page
function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
    userList.innerHTML = "<h3>User List:</h3>";

    users.forEach((user, index) => {
        userList.innerHTML += `
            <div class="user-item">
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Phone Number:</strong> ${user.phone}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Bank Details:</strong> ${user.bankName}, ${user.accountName}, ${user.accountNumber}, Branch: ${user.branch}</p>
                <p><strong>Signup Date:</strong> ${user.signupDate}</p>
                <hr>
            </div>
        `;
    });
}
