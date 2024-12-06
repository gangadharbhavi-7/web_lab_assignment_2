// Print function to open the browser's print dialog
function printResult() {
    window.print();
}

// Function to download the form data as a text file
function downloadData() {
    // Get the form data dynamically from the PHP variables
    const firstName = Gangadhar;
    const lastName = b;
    const email = ganga@email.com;
    const phone = 8105824469;
    const address = d.c halli,bengaluru;

    // Format the data as a text
    const data = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
    `;

    // Create a Blob (binary large object) to hold the data
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a download link dynamically
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'registration_data.txt';  // File name for download

    // Simulate a click on the link to start the download
    link.click();
}
