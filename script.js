// Get references to the form, email input, attendance select, and confirmation message elements
const form = document.getElementById('rsvpForm');
const emailInput = document.getElementById('email');
const attendanceSelect = document.getElementById('attendance');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the 1  selected attendance value
    const attendance = attendanceSelect.value;

    // Check if the user selected "yes"
    if (attendance === 'yes') {
        // Display a party emoji and a positive message
        confirmationMessage.textContent = '🎉 You\'re in! Can\'t wait to see you there! 🎉';
        confirmationMessage.style.display = 'block';
    } else {
        // Display a different message for other responses
        confirmationMessage.textContent = 'Thanks for your RSVP! We hope to see you another time.';
        confirmationMessage.style.display = 'block';
    }

    // Clear the form fields
    emailInput.value = '';
    attendanceSelect.value = '';
});