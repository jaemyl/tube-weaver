chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
})

const bearUrl = chrome.runtime.getURL('images/bear.png')

function onMessage(msg) {
  console.log(`onMessage(${msg})`)
  if (msg === 'inject') {
    inject()
  }
  else {
    console.log('unexpected msg')
  }
}

function inject() {
    console.log('inject()')
    //console.log('_yt_player:' + _yt_player)
    const s = document.createElement('script')
    s.src = chrome.extension.getURL('injected.js')
    document.head.appendChild(s)
}

console.log('tube-weaver started')

