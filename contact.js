document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Formularz kontaktowy
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Wysyłanie formularza przez EmailJS
    emailjs.sendForm('service_nm656st', 'template_m7it47j', this, 'npYiHCLwOIREDiDF6')
        .then(function(response) {
            console.log('Sukces:', response);
            alert("Wiadomość została wysłana!");
        }, function(error) {
            console.log('Błąd:', error);
            alert("Coś poszło nie tak, spróbuj ponownie.");
        });
});
