const adminUsername = "barunodonline@gmail.com";
const adminPassword = "bhushitha2007#";

function adminLogin() {
    const password = prompt("Please enter admin password:");
    if (password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect password!");
        window.location.href = "index.html";
    }
}

function addNewUser() {
    const name = prompt("Enter Name:");
    const address = prompt("Enter Address:");
    const phone = prompt("Enter Phone Number:");
    const email = prompt("Enter Email:");
    const username = prompt("Enter Username:");
    const password = prompt("Enter Password:");

    const newUser = { name, address, phone, email, username, password };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("New user added!");
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
    userList.innerHTML = "<h3>User List:</h3>";

    users.forEach((user, index) => {
        userList.innerHTML += `
            <div>
                <p>${user.name} (${user.username})</p>
                <button onclick="deleteUser(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User deleted!");
    loadUsers();  // Refresh the user list
}

// Load users when admin page is loaded
window.onload = function() {
    loadUsers();
};
