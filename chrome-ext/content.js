console.log("Hello from content.js!");

let paragraphs = document.getElementsByTagName("p");
for (elt of paragraphs) {
    elt.style = "background-color: yellow; border: 2px solid black;";
}