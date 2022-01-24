chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage(message, sender, response) {
    console.log(message);
  
    let data = document.getElementsByTagName("body");
    for (let i = 0; i < data.length; i++) {
        data[i].style['font-family'] = message;
        //data[i].style['background-color'] = '#121212';
    }
}






