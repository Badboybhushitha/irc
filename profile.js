window.onload = function() {
    const username = localStorage.getItem("loggedInUser");
    if (!username) {
        alert("Please log in first!");
        window.location.href = "login.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username);

    if (user) {
        document.getElementById("userInfo").innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Address: ${user.address}</p>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
        `;
    }
};
