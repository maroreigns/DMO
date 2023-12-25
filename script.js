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

  function getCode() {
    var textElement = document.getElementById('toggleText1');
    if (textElement.style.display === 'none') {
      textElement.style.display = 'block';
    } else {
      textElement.style.display = 'none';
    }
  }
 

// Bet9ja section
function getTextt() {
    var textElement = document.getElementById('toggleText2');
    if (textElement.style.display === 'none') {
      textElement.style.display = 'block';
    } else {
      textElement.style.display = 'none';
    }
  }

// 1xbet section
function toggleText() {
    var textElement = document.getElementById('toggleText3');
    if (textElement.style.display === 'none') {
      textElement.style.display = 'block';
    } else {
      textElement.style.display = 'none';
    }
  }






























function getText() {
   
    var textToDisplay = "FF7F52C";
   
    
    // Display the text in the output div
    document.getElementById("output").innerHTML = textToDisplay;
    
}



    





 