console.log("Content extension running");

window.addEventListener("load", userText);
window.addEventListener("keyup", userText);

function userText() {
  const googleDoc = "docs.google.com";
  const quipFT = "finetune.quip.com";
  const currentTab = window.location.origin;
  let nodes = [];

  if (currentTab.includes(googleDoc))
    nodes = document.querySelectorAll(".kix-wordhtmlgenerator-word-node");

  if (currentTab.includes(quipFT))
    nodes = document.querySelectorAll(
      "[data-contextmenu='section-context-menu']"
    );

  if (nodes) {
    let userContent = [...nodes];
    userContent = userContent
      .map(({ innerText }) => innerText.length > 1 && innerText)
      .filter(line => line);

    console.log("userContent: ", userContent);

    setTimeout(() => chrome.runtime.sendMessage({ userContent }), 1500);
  }
}
