console.log("popup");

const content = document.getElementById("content");
let { userContent } = chrome.extension.getBackgroundPage();

if (userContent) {
  userContent.map(text => {
    const p = document.createElement("p");
    const node = document.createTextNode(text.trim());
    p.appendChild(node);

    content.appendChild(p);
  });
}
