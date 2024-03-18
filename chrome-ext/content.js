console.log("Hello from content.js!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log("Message received: " + message);
    if (message == "clicked") {
        let paragraphs = document.getElementsByTagName("p");
        for (elt of paragraphs) {
            elt.style = "background-color: yellow; border: 2px solid black;";
        }
    }
}