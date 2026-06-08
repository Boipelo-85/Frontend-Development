const emailInput = document.getElementById('email');
const subscribeBtn = document.querySelector('.subscribe-btn');
const errorMessage = document.getElementById('error-message');
const successModal = document.getElementById('successModal');
const dismissBtn = document.getElementById('dismissBtn');
const confirmationEmail = document.getElementById('confirmation-email');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
    return emailRegex.test(email);
}

emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    
    if (email !== '') {
        if (isValidEmail(email)) {
     
            subscribeBtn.classList.add('active');
            errorMessage.classList.remove('show');
            emailInput.classList.remove('invalid');
        } else {
      
            subscribeBtn.classList.remove('active');
            errorMessage.classList.add('show');
            emailInput.classList.add('invalid');
        }
    } else {

        subscribeBtn.classList.remove('active');
        errorMessage.classList.remove('show');
        emailInput.classList.remove('invalid');
    }
});

subscribeBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();
    
    if (isValidEmail(email)) {
        confirmationEmail.textContent = email;
        successModal.classList.add('show');
    }
});


dismissBtn.addEventListener('click', function() {
    successModal.classList.remove('show');

    emailInput.value = '';
    subscribeBtn.classList.remove('active');
    errorMessage.classList.remove('show');
    emailInput.classList.remove('invalid');
});

