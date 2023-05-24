if (localStorage.getItem('visitorsCount')) {
    // Increment the count if the key exists
    let count = parseInt(localStorage.getItem('visitorsCount'));
    count++;
    localStorage.setItem('visitorsCount', count.toString());
} else {
    // Set the count to 1 if the key doesn't exist
    localStorage.setItem('visitorsCount', '1');
}

// Retrieve the updated count from localStorage
let totalCount = parseInt(localStorage.getItem('visitorsCount'));

// Display the visitor count on the screen
document.getElementById('visitorCount').textContent = totalCount;