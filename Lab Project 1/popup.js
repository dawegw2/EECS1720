function setup() {
    createCanvas(160, 50);
  
    let selectedFont = select('#mySelect');
    selectedFont.changed(changeFont); //select() and changed() are P5.js DOM functions

    let inputFontSize = select('#mySlider');
    inputFontSize.input(changeFont);

    let wordColor = select('#colorChanger');
    wordColor.changed(changeFont);

    function changeFont() {

        let msgFont = selectedFont.value();
        let msgSize = inputFontSize.value();
        let msgColor = wordColor.value();

        let slider = document.getElementById("mySlider");
        let output = document.getElementById("sliderOut");
        output.innerHTML = slider.value;
    
        //send changes to content page or script (program.js)
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, msgFont); //gets active tab at index 0
            chrome.tabs.sendMessage(tabs[0].id, msgSize); 
            chrome.tabs.sendMessage(tabs[0].id, msgColor); 
        });
    }
}





