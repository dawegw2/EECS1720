/*
chrome.browserAction.onClicked.addListener(clickedButton);

function clickedButton() {
    let msg = "1";
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, msg); //gets active tab at index 0
    });

}
*/

//const element = document.getElementsByTagName('body');

let x = document.getElementsByTagName("body")[0].id;

//alert(window.getComputedStyle(x).getPropertyValue('font-family'));


//const style = getComputedStyle(Element, pseudoElement);
const element = document.querySelector("body");
const style = getComputedStyle(element);

const backgroundColor = style.backgroundColor;
console.log(backgroundColor);

