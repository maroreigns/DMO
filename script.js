function updateDate() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('date-container').textContent = formattedDate;
}

// Initial call to display the date
updateDate();

// Update the date every second
setInterval(updateDate, 1000);

function openAdForm() {
    // You can replace this with your own logic to open an advertising form or link
    alert("Redirect to your advertising form or link here!");
  }