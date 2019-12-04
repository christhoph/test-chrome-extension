console.log("background running");

window.userContent = [];
chrome.runtime.onMessage.addListener(receiver);

function receiver(request) {
  userContent = request && request.userContent;
}
