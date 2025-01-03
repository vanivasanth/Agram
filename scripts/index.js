document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#features-section').scrollIntoView({ behavior: 'smooth' });
  });

 fetch('features.html')
  .then(response => response.text())
  .then(data => {
    // Insert the fetched HTML content into the #features-container div
    document.getElementById('features-container').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading features.html:', error);
  });
  