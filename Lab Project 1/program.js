chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage(message, sender, response) {
    console.log(message);
  
    let data = document.getElementsByTagName("body");
    for (let i = 0; i < data.length; i++) {
        data[i].style['font-family'] = message; //change font to recieved font 
        data[i].style['font-size'] = message + "px"; //change font size 
        data[i].style['color'] = message;
    }
}







