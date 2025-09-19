// Function to calculate monthly loan payment
function calculateLoan() {
    // Get values from input fields
    let loanAmount = parseFloat(document.getElementById("loan-amount").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12; // Convert annual % to monthly decimal
    let monthsToPay = parseInt(document.getElementById("months-to-pay").value);

    // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
    let emi;
    if (interestRate === 0) {
        // No interest, simple division
        emi = loanAmount / monthsToPay;
    } else {
        emi = loanAmount * interestRate * Math.pow(1 + interestRate, monthsToPay) /
              (Math.pow(1 + interestRate, monthsToPay) - 1);
    }

    // Update the result in the page
    document.getElementById("payment").innerText = "Monthly Payment: $" + emi.toFixed(2);
}

// Run calculation once when page loads
window.onload = calculateLoan;

// Add event listeners so inputs update instantly
document.getElementById("loan-amount").addEventListener("input", calculateLoan);
document.getElementById("interest-rate").addEventListener("input", calculateLoan);
document.getElementById("months-to-pay").addEventListener("input", calculateLoan);
