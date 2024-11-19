// Process payment
async function processPayment() {
    const phone = document.getElementById('phone').value;
    const network = document.getElementById('network').value;
    const amount = calculateTotal(); // Calculate total amount

    // Set up API details
    const apiKey = "https://api-otp.hubtel.com";  // Replace with your actual API key
    const apiUrl = "https://api.paymentprovider.com/payment-request"; // Replace with actual API endpoint

    // Request data
    const data = {
        amount: amount,
        currency: "GHS",
        phone: phone,
        provider: network,
        callbackUrl: "https://yourdomain.com/payment-success",
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Payment initiated. Please complete payment on your phone.");
        } else {
            alert("Payment failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
}

// Placeholder for total calculation
function calculateTotal() {
    // Implement calculation of cart total
    return 100; // Example value
}

async function processPayment() {
    const phone = document.getElementById('phone').value;
    const network = document.getElementById('network').value;
    const amount = calculateTotal();

    const merchantAccountNumber = "YOUR_MERCHANT_ACCOUNT_NUMBER"; // replace with actual Merchant Account Number
    const clientID = "YOUR_CLIENT_ID"; // replace with actual Client ID
    const clientSecret = "YOUR_CLIENT_SECRET"; // replace with actual Client Secret
    const endpoint = `https://api.hubtel.com/v1/merchantaccount/merchants/${merchantAccountNumber}/receive/mobilemoney`;

    const data = {
        CustomerName: "Customer Name",   // Optionally replace with customer’s name
        CustomerMsisdn: phone,           // Customer’s phone number
        CustomerEmail: "customer@example.com",  // Optionally replace with customer’s email
        Channel: network,                // Mobile money provider (MTN, AirtelTigo, or Vodafone)
        Amount: amount,
        PrimaryCallbackUrl: "https://yourdomain.com/payment-success",
        Description: "Brick and Block Purchase",
        ClientReference: "INV123456"     // Unique invoice or order ID
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa(clientID + ":" + clientSecret),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.Status === "Success") {
            alert("Payment initiated. Please complete the transaction on your phone.");
        } else {
            alert("Payment failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
}
