document.addEventListener('DOMContentLoaded', () => {
    const otpForm = document.getElementById('otp-form');
    const otpSection = document.getElementById('otp-section');
    const messageElement = document.getElementById('message');
    let generatedOTP = '123456';

    // Handle mobile number submission and OTP generation
    document.getElementById('mobile-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const mobileNumber = document.getElementById('mobile-number').value.trim();

        if (validateMobileNumber(mobileNumber)) {
            generatedOTP = generateOTP();
            otpSection.style.display = 'block';
            messageElement.textContent = `OTP has been sent to ${mobileNumber}.`;
            console.log(`Generated OTP: ${generatedOTP}`); // For debugging purposes
        } else {
            messageElement.textContent = 'Please enter a valid 10-digit mobile number.';
        }
    });
    mobile-form.addEventListener('submit', (event) => {
        event.preventDefault();
        const otpEntered = document.getElementById('otp').value.trim();

        if (otpEntered === generatedOTP) {
            messageElement.textContent = 'OTP verified successfully!';
        } else {
            messageElement.textContent = 'Invalid OTP. Please try again.';
        }

    // Handle OTP verification
    otpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const otpEntered = document.getElementById('otp').value.trim();

        if (otpEntered === generatedOTP) {
            messageElement.textContent = 'OTP verified successfully!';
        } else {
            messageElement.textContent = 'Invalid OTP. Please try again.';
        }
    });

    function validateMobileNumber(number) {
        // Basic validation for a 10-digit mobile number
        return /^[0-9]{10}$/.test(number);
    }
});
