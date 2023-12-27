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
    let hideContent = document.querySelector('.click-btn');

    var textStyle = window.getComputedStyle(textElement);

    if (textStyle.display === 'none') {
      textElement.style.display = 'block';
    } else {
      textElement.style.display = 'none';
    }

    if (hideContent.innerText === 'Click here to get code') {
      hideContent.innerText = 'Click here to hide code';
    } else {
      hideContent.innerText = 'Click here to get code';
    }
  }

  function copyCode1(code) {
    var copyMessage = document.getElementById('copyMessage');
    var copyCodeButton1 = document.querySelector('.copy-button1');

  
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    copyMessage.innerText = 'Code copied!';
  
    setTimeout(function() {
      copyMessage.innerText = '';
    }, 2000);
  
    if (copyCodeButton1.innerText === 'Copy Code') {
      copyCodeButton1.innerText = 'Copied';
  
    } else {
      copyCodeButton1.innerText = 'Copy Code';
    }
    
  }


  function copyCode2(code) {
    var copyMessage = document.getElementById('copyMessage');
    var copyCodeButton2 = document.querySelector('.copy-button2');

  
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    copyMessage.innerText = 'Code copied!';
  
    setTimeout(function() {
      copyMessage.innerText = '';
    }, 2000);

      
    if (copyCodeButton2.innerText === 'Copy Code') {
      copyCodeButton2.innerText = 'Copied';
 
    } else {
      copyCodeButton2.innerText = 'Copy Code';
    }
    
  }

  //Sortybet section END //

  



 

// Bet9ja section
function getTextt() {
    var textElement = document.getElementById('toggleText2');
    let hideContent = document.querySelectorAll('.click-btn')[1];

    // Get the computed style to check the current display value
    var textStyle = window.getComputedStyle(textElement);

    if (textStyle.display === 'none') {
      textElement.style.display = 'block';
    } else {
      textElement.style.display = 'none';
    }

    if (hideContent.innerText === 'Click here to get code') {
      hideContent.innerText = 'Click here to hide code';
    } else {
      hideContent.innerText = 'Click here to get code';
    }
  }


  function copyCode3(code) {
    var copyMessage = document.getElementById('copyMessage-1');
    var copyCodeButton3 = document.querySelector('.copy-button3');

  
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    copyMessage.innerText = 'Code copied!';
  
    setTimeout(function() {
      copyMessage.innerText = '';
    }, 2000);
  
    if (copyCodeButton3.innerText === 'Copy Code') {
      copyCodeButton3.innerText = 'Copied';

    } else {
      copyCodeButton3.innerText = 'Copy Code';
    }
    
  }



  function copyCode4(code) {
    var copyMessage = document.getElementById('copyMessage-1');
    var copyCodeButton4 = document.querySelector('.copy-button4');

  
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    copyMessage.innerText = 'Code copied!';
  
    setTimeout(function() {
      copyMessage.innerText = '';
    }, 2000);
  
    if (copyCodeButton4.innerText === 'Copy Code') {
      copyCodeButton4.innerText = 'Copied';

    } else {
      copyCodeButton4.innerText = 'Copy Code';
    }
    
  }
  // Bet9ja section END //








// 1xbet section
function toggleText() {
    var textElement = document.getElementById('toggleText3');
    let hideContent = document.querySelectorAll('.click-btn')[2];

    // Get the computed style to check the current display value
    var textStyle = window.getComputedStyle(textElement);

    if (textStyle.display === 'none') {
      textElement.style.display = 'block';
    } else {
      textElement.style.display = 'none';
    }

    if (hideContent.innerText === 'Click here to get code') {
      hideContent.innerText = 'Click here to hide code';
    } else {
      hideContent.innerText = 'Click here to get code';
    }
  }



  function copyCode5(code) {
    var copyMessage = document.getElementById('copyMessage-2');
    var copyCodeButton5 = document.querySelector('.copy-button5');

  
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    copyMessage.innerText = 'Code copied!';
  
    setTimeout(function() {
      copyMessage.innerText = '';
    }, 2000);
  
    if (copyCodeButton5.innerText === 'Copy Code') {
      copyCodeButton5.innerText = 'Copied';
  
    } else {
      copyCodeButton5.innerText = 'Copy Code';
    }
    
  }



  function copyCode6(code) {
    var copyMessage = document.getElementById('copyMessage-2');
    var copyCodeButton6 = document.querySelector('.copy-button6');

  
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    copyMessage.innerText = 'Code copied!';
  
    setTimeout(function() {
      copyMessage.innerText = '';
    }, 2000);
  
    if (copyCodeButton6.innerText === 'Copy Code') {
      copyCodeButton6.innerText = 'Copied';
  
    } else {
      copyCodeButton6.innerText = 'Copy Code';
    }
    
  }

  // 1xbet section END //




  // server localhost
  // fetch('http://localhost:3000')
  // .then(response => response.text())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));






























function getText() {
   
    var textToDisplay = "FF7F52C";
   
    
    // Display the text in the output div
    document.getElementById("output").innerHTML = textToDisplay;
    
}



    





 