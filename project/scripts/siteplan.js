// JavaScript for form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = '';

    if (name === '' || email === '') {
        message = 'Please fill out all required fields.';
    } else {
        message = 'Form submitted successfully!';
    }

    document.getElementById('form-message').innerText = message;
});
