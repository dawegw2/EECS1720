chrome.browserAction.onClicked.addListener(clickedButton);

function clickedButton() {
    let msg = "1";
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, msg); //gets active tab at index 0
    });

}

