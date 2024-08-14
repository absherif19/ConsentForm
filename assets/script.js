document.addEventListener('DOMContentLoaded', function() {
    const clickHereLink = document.getElementById('click-here');
    const whatsappCheck = document.getElementById('whatsapp-check');
    const whatsappNumberGroup = document.getElementById('whatsapp-number-group');
    const promotionsCheck = document.getElementById('promotions-check');
    const termsCheck = document.getElementById('terms-check');
    const submitButton = document.querySelector('.submit-btn');
  
    function updateSubmitButtonState() {
      if (promotionsCheck.checked && termsCheck.checked) {
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
    });
  
    promotionsCheck.addEventListener('change', updateSubmitButtonState);
    termsCheck.addEventListener('change', updateSubmitButtonState);
  
    // Initial check to disable the button if not already done
    updateSubmitButtonState();
  });
  