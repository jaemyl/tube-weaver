function sendMessage(msg) {
  console.log(`sending msg(${msg})`)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var port = chrome.tabs.connect(tabs[0].id);
    port.postMessage(msg);
  });
}

let run = false

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button')
    button.addEventListener('click', () => {
	run = !run
	
	let msg = ''
	if (run) {
	    msg = 'run'
	    button.textContent = 'No Run'
	}
	else {
	    msg = 'norun'
	    button.textContent = 'Run'
	}
	sendMessage(msg)
	
	button.classList.toggle('run')
    })
});
