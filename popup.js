function sendMessage(msg) {
  console.log(`sending msg(${msg})`)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var port = chrome.tabs.connect(tabs[0].id);
    port.postMessage(msg);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#inject').addEventListener(
    'click', () => sendMessage('inject'))
  });
