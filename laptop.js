// JavaScript to handle form submission and add reviews dynamically
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
  
    // Create a new review item
    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `<strong>${name}</strong> - ${rating} stars<br>${review}`;
  
    // Add review to the list
    document.getElementById('reviewsList').appendChild(reviewItem);
  
    // Clear the form
    this.reset();
  });
  