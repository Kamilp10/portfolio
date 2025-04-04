// Sprawdzanie preferencji motywu przy ładowaniu strony
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light-mode');  // Domyślny motyw, jeśli nie ma zapisanego
    }
});

// Przełączanie motywu
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Zapisanie wybranego motywu w localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});

// Obsługa formularza kontaktowego (dzięki EmailJS)
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Zatrzymanie domyślnego wysyłania formularza

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
}
