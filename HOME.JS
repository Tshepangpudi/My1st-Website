document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-modal');
    const learnMoreButton = document.getElementById('learn-more');
    const closePopupButton = document.getElementById('close-popup');
  
    // Show popup when the "Learn More" button is clicked
    learnMoreButton.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  
    // Close popup
    closePopupButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
  
  