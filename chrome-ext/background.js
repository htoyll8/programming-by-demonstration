console.log("Background running...");

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    chrome.tabs.sendMessage(tab.id, "clicked");
}