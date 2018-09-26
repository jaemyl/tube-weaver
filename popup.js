function sendMessage(msg) {
  console.log(`sending msg(${msg})`)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var port = chrome.tabs.connect(tabs[0].id);
    port.postMessage(msg);
  });
}

let run = false

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.button.start')
    startButton.addEventListener('click', () => {
		sendMessage('start')
	})
	const stopButton = document.querySelector('.button.stop')
    stopButton.addEventListener('click', () => {
		sendMessage('stop')
    })
});
