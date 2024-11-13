// Admin credentials
const adminUsername = "B.Arunod";
const adminPassword = "bhushitha2007#";

// Login function for Admin access
function login() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    if (username === adminUsername && password === adminPassword) {
        document.getElementById("adminLogin").style.display = "none";
        document.getElementById("adminContent").style.display = "block";
        loadUserList();
    } else {
        alert("ඔබ මේහි අයිතිකරුවා නොවන ලේස.");
    }
}

// Load user list on the Admin page
function loadUserList() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear previous user list

    users.forEach((user, index) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-entry");
        userDiv.innerHTML = `
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <button onclick="removeUser(${index})">Remove User</button>
        `;
        userList.appendChild(userDiv);
    });
}

// Function to add a new user
document.getElementById("addUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, email, password, phone });
    localStorage.setItem("users", JSON.stringify(users));

    loadUserList();
    alert("User added successfully.");
    this.reset();
});

// Remove a user from the list
function removeUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUserList();
                                         }
