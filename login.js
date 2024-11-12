document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        // Store the logged in user's username for later use
        localStorage.setItem("loggedInUser", username);
        window.location.href = "profile.html";
    } else {
        alert("Invalid username or password!");
        window.location.href = "signup.html";
    }
});
