function sendMessage(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, message);
  });
}

chrome.browserAction.onClicked.addListener(() => {
  sendMessage('iconClicked');
});
