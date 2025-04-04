document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Możemy dodać tu kod do formularza kontaktowego, jeśli chcesz, aby działał na zewnętrznych serwisach (np. EmailJS)
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Formularz został wysłany!");
    // Możesz dodać tutaj logikę wysyłania formularza.
});
