document.addEventListener('DOMContentLoaded', function() {
    const clickHereLink = document.getElementById('click-here');
    const whatsappCheck = document.getElementById('whatsapp-check');
    const whatsappNumberGroup = document.getElementById('whatsapp-number-group');
    const promotionsCheck = document.getElementById('promotions-check');
    const termsCheck = document.getElementById('terms-check');
    const submitButton = document.querySelector('.submit-btn');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phone-number');
    const whatsappNumberInput = document.getElementById('whatsapp-number');
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    function validatePhoneNumber(phoneNumber) {
      // Updated regex to allow both international and local formats
      const regex = /^(\+\d{1,3})?\d{8,}$/;
      return regex.test(phoneNumber);
    }
  
    function updateSubmitButtonState() {
      const isEmailValid = validateEmail(emailInput.value);
      const isPhoneNumberValid = validatePhoneNumber(phoneNumberInput.value);
      const isWhatsAppNumberValid = whatsappCheck.checked || validatePhoneNumber(whatsappNumberInput.value);
  
      emailInput.setCustomValidity(isEmailValid ? '' : 'Please enter a valid email address.');
      phoneNumberInput.setCustomValidity(isPhoneNumberValid ? '' : 'Please enter a valid phone number.');
      whatsappNumberInput.setCustomValidity(isWhatsAppNumberValid ? '' : 'Please enter a valid WhatsApp number.');
  
      if (promotionsCheck.checked && termsCheck.checked && isEmailValid && isPhoneNumberValid && isWhatsAppNumberValid) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
  
    clickHereLink.addEventListener('click', function(event) {
      event.preventDefault();
      whatsappCheck.checked = false;
      whatsappNumberGroup.style.display = 'block';
    });
  
    whatsappCheck.addEventListener('change', function() {
      if (whatsappCheck.checked) {
        whatsappNumberGroup.style.display = 'none';
      } else {
        whatsappNumberGroup.style.display = 'block';
      }
      updateSubmitButtonState();
    });
  
    promotionsCheck.addEventListener('change', updateSubmitButtonState);
    termsCheck.addEventListener('change', updateSubmitButtonState);
    emailInput.addEventListener('input', updateSubmitButtonState);
    phoneNumberInput.addEventListener('input', updateSubmitButtonState);
    whatsappNumberInput.addEventListener('input', updateSubmitButtonState);
  
    // Initial check to disable the button if not already done
    updateSubmitButtonState();
  });
