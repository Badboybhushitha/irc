function processOrder() {
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerPhone1 = document.getElementById("customerPhone1").value;
    const customerPhone2 = document.getElementById("customerPhone2").value;
    const customerDistrict = document.getElementById("customerDistrict").value;
    const customerCity = document.getElementById("customerCity").value;
    const productCode = document.getElementById("productCode").value;
    const stock = document.getElementById("stock").value;
    const userPrice = parseFloat(document.getElementById("userPrice").value);
    const deliveryCharge = 400;
    const totalPrice = userPrice + deliveryCharge;

    // Create WhatsApp message content
    const message = `Order Details:
Customer Name: ${customerName}
Customer Address: ${customerAddress}
Customer Email: ${customerEmail}
Customer Phone 1: ${customerPhone1}
Customer Phone 2: ${customerPhone2}
District: ${customerDistrict}
City: ${customerCity}
Product Code: ${productCode}
Stock: ${stock}
User Price: Rs ${userPrice}
Delivery Charge: Rs ${deliveryCharge}
Total Price: Rs ${totalPrice}`;

    // Define your WhatsApp number
    const whatsappNumber = "94788054702"; // Replace this with your number in international format

    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat with the message
    window.open(whatsappURL, "_blank");

    // Create and download the image with order details
    createDownloadableImage(message);
    
    // Optionally, display a receipt for the user
    document.getElementById("receiptDetails").innerText = message;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("receipt").style.display = "block";
}

// Function to create a downloadable image from the order details text
function createDownloadableImage(text) {
    // Set up the canvas for image generation
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 800; // Set width
    canvas.height = 500; // Set height

    // Set background and text style
    context.fillStyle = 'black'; // Background color
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = '18px Arial'; // Font size and family
    context.fillStyle = 'white'; // Text color for contrast

    // Split text into lines and draw them
    const lines = text.split('\n');
    let yPosition = 30; // Starting vertical position for text
    lines.forEach((line) => {
        context.fillText(line, 20, yPosition);
        yPosition += 25; // Add space between lines
    });

    // Create download link with styling
    const imageUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'Order_Details.png';
    downloadLink.textContent = 'Download Order Details';

    // Apply styles to make the button yellow and visually appealing
    downloadLink.style.display = 'inline-block';
    downloadLink.style.padding = '12px 25px';
    downloadLink.style.marginTop = '20px';
    downloadLink.style.backgroundColor = '#FFD700'; // Yellow color
    downloadLink.style.color = '#333'; // Dark text for contrast
    downloadLink.style.borderRadius = '5px'; // Rounded corners
    downloadLink.style.textDecoration = 'none'; // Remove underline
    downloadLink.style.fontWeight = 'bold';
    downloadLink.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Subtle shadow

    document.body.appendChild(downloadLink); // Append the download link to the body
}
