document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consent-form');
    const whatsappCheck = document.getElementById('whatsapp-check');
    const promotionsCheck = document.getElementById('promotions-check');
    const termsCheck = document.getElementById('terms-check');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phone-number');
    const whatsappNumberInput = document.getElementById('whatsapp-number');


    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const payload = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: emailInput.value,
            phoneNumber: phoneNumberInput.value,
            whatsappNumber: whatsappCheck.checked
                ? phoneNumberInput.value
                : whatsappNumberInput.value,
            checkbox1: promotionsCheck.checked,
            checkbox2: termsCheck.checked,
            isAUH: isAUH
        };

        // Make the POST request to the API through the proxy
        fetch(corsAnywhere + apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (data === true) {
                console.log('Success:', data);
                alert('Your consent has been successfully updated.');
                // Optionally redirect or reset the form
            } else {
                console.error('Unexpected response:', data);
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error processing your request. Please try again.');
        });
    });
});
