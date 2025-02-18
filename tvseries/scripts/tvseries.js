document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('carouselExample');
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 2000, // 2 seconds interval between slides
      wrap: true // Make the carousel loop back to the beginning
    });
  }
  
  // Function to show a welcome message
  function showWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Welcome to TVSeriesReviews!';
    document.body.appendChild(welcomeMessage);
  }
  
  showWelcomeMessage();
  
  // Listen for events on the contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
  
  // Handle form submission
  var form = document.getElementById('suggestion-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for your suggestion!');
    });
  }
  
  // Toggle dark mode
  const toggleDarkModeButton = document.getElementById('toggleDarkMode');
  if (toggleDarkModeButton) {
    toggleDarkModeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
  
  // Use localStorage to save the site state
  localStorage.setItem('visited', 'yes');
});
