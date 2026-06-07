const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const nameField = document.getElementById('name-field');
const addressField = document.getElementById('address-field');
const passwordInput = document.getElementById('password-input');
const passwordToggleBtn = document.getElementById('password-toggle-btn');
const contactBackBtn = document.querySelector('.contact-back-btn');

// 1. Sign Up टैब फंक्शन
signupTab.addEventListener('click', function() {
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
    
    nameField.style.display = 'flex';
    addressField.style.display = 'flex';
    
    nameField.classList.add('fade-animation');
    addressField.classList.add('fade-animation');
});

// 2. Login टैब फंक्शन
function switchToLogin() {
    signupTab.classList.remove('active');
    loginTab.classList.add('active');
    
    nameField.style.display = 'none';
    addressField.style.display = 'none';
}
loginTab.addEventListener('click', switchToLogin);

// 3. आँख वाले बटन से पासवर्ड दिखाना/छुपाना
passwordToggleBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// 4. बैक एरो बटन पर क्लिक होने पर फॉर्म को दोबारा 'Login' पर रीसेट करना
contactBackBtn.addEventListener('click', switchToLogin);
