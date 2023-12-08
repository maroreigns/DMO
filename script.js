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
   
    alert("Redirect to your advertising form or link here!");
  }


  //Sortybet section
  function getText() {
   
    var textToDisplay = "FF7F52C";
   
    
    // Display the text in the output div
    document.getElementById("output").innerHTML = textToDisplay;
}

// Bet9ja section
function getCode() {
    
    var textToDisplay = " 5TQZXW2";
   
    
    // Display the text in the output div
    document.getElementById("output1").innerHTML = textToDisplay;
}

// 1xbet section
function getCodee() {
 
    var textToDisplay = "Not available";
   
    
    // Display the text in the output div
    document.getElementById("output2").innerHTML = textToDisplay;
}






 