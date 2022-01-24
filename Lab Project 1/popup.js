function setup() {
    createCanvas(160, 50);
  
    let selectedFont = select('#mySelect')
    selectedFont.changed(changeFont); //select() and changed() are P5.js DOM functions

    function changeFont() {
        let msg = selectedFont.value();
    
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, msg); //gets active tab at index 0
        });
    }
}



