document.addEventListener("DOMContentLoaded", function () {
    const verifyButton = document.getElementById("verify-button");
    const productCodeInput = document.getElementById("product-code");
    const verificationResult = document.getElementById("verification-result");

    verifyButton.addEventListener("click", function () {
        const productCode = productCodeInput.value;
        // You should implement server-side logic here to check the product code.
        // For this example, we'll use a static list of valid product codes.
        const validProductCodes = ["1836490", "1027398"];

        if (validProductCodes.includes(productCode)) {
            verificationResult.textContent = "Product Verified!";
        } else {
            verificationResult.textContent = "Invalid, Counterfeit Product";
        }
    });
});
