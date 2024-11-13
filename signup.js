document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Getting the signup form values
    const name = document.getElementById("signupName").value;
    const address = document.getElementById("signupAddress").value;
    const phone = document.getElementById("signupPhone").value;
    const email = document.getElementById("signupEmail").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    
    // Bank details
    const bankName = document.getElementById("bankName").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const accountName = document.getElementById("accountName").value;
    const branch = document.getElementById("branch").value;

    // Creating the new user object
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
        branch
    };

    // Saving user data to localStorage (persistent storage)
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Send signup details to WhatsApp
    const whatsappMessage = `
        New User Signup:\n
        Name: ${name}\n
        Address: ${address}\n
        Phone: ${phone}\n
        Email: ${email}\n
        Username: ${username}\n
        Bank Name: ${bankName}\n
        Account Number: ${accountNumber}\n
        Account Name: ${accountName}\n
        Branch: ${branch}
    `;

    const whatsappURL = `https://wa.me/94788054702?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    // Redirect to login after successful signup
    alert("Signup successful! Your details have been sent to the admin.");
    window.location.href = "login.html";
});
