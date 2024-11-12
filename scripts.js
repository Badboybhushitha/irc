// Add User Signup logic
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const accountNumber = document.getElementById("account_number").value;
    const accountName = document.getElementById("account_name").value;
    const bankName = document.getElementById("bank_name").value;
    const branch = document.getElementById("branch").value;

    const userData = {
        name,
        address,
        phone,
        email,
        accountNumber,
        accountName,
        bankName,
        branch,
    };

    // Send data to WhatsApp
    const message = `New Signup:\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\nBank Details: ${accountNumber}, ${accountName}, ${bankName}, ${branch}`;
    const whatsappUrl = `https://wa.me/+94742447143?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
});

// Handle login submission
document.querySelector("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for admin login
    if (username === "barunodonline@gmail.com" && password === "bhushitha2007#") {
        window.location.href = "admin.html";
    } else {
        alert("Invalid login credentials");
    }
});

// New Order submission
document.querySelector("#order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const customerName = document.getElementById("customer_name").value;
    const customerAddress = document.getElementById("customer_address").value;
    const customerEmail = document.getElementById("customer_email").value;
    const customerPhone = document.getElementById("customer_phone").value;
    const productCode = document.getElementById("product_code").value;
    const stock = document.getElementById("stock").value;
    const userPrice = document.getElementById("user_price").value;

    const receiptDetails = {
        customerName,
        customerAddress,
        customerEmail,
        customerPhone,
        productCode,
        stock,
        userPrice,
        deliveryCharge: 400,
        profit: userPrice - stock,
        totalAmount: parseFloat(userPrice) + 400
    };

    // Generate receipt message
    const receiptMessage = `
        Receipt for Order:
        Customer Name: ${customerName}
        Product Code: ${productCode}
        Stock: ${stock}
        User Price: Rs. ${userPrice}
        Delivery Charge: Rs. 400
        Profit: Rs. ${receiptDetails.profit}
        Total Amount: Rs. ${receiptDetails.totalAmount}
    `;

    const whatsappUrl = `https://wa.me/+94742447143?text=${encodeURIComponent(receiptMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Trigger downloadable receipt image (use any method to create the receipt image or just display the message)
    alert("Receipt sent to WhatsApp. You can download the receipt image from the link.");
});

// Profile page: Display earnings
function displayProfileData() {
    // For demo, let's assume these values come from the server or database
    const earnings = 5000;
    const orders = 10;

    document.getElementById("earnings").textContent = `Rs. ${earnings}`;
    document.getElementById("orders").textContent = orders;
}

// Call the function to show the profile data when the page loads
window.onload = function() {
    displayProfileData();
};
