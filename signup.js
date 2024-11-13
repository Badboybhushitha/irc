document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const address = document.getElementById("signupAddress").value;
    const phone = document.getElementById("signupPhone").value;
    const email = document.getElementById("signupEmail").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    const newUser = { name, address, phone, email, username, password };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Details sent to admin.");

    // Send signup details to WhatsApp
    const whatsappMessage = `New User Signup:\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\nUsername: ${username}`;
    const whatsappURL = `https://wa.me/94788054702?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    window.location.href = "login.html";
});
