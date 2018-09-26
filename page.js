chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
})

const bearUrl = chrome.runtime.getURL('images/bear.png')
const DISPATCH_INTERVAL = 3000 // 3 sec
let run = false
let elem = null
let event = null

function makeEvent() {
    const event = document.createEvent('MouseEvents')
    event.initMouseEvent(
        'click',
        true, // canBubble
        false, // cancelable
        window,
        1,
        200, // screenX
        200, // screenY
        200, // clientX
        200, // clientY
        false,
        false,
        false,
        false,
        2, // right button
        null
    )
    return event
}

function init() {
    console.log('init()')
    elem = document.querySelector('video')
    console.log('elem:' + elem)
    event = makeEvent()
    console.log('event:' + event)
}

function onMessage(msg) {
    console.log(`onMessage(${msg})`)
    if (msg === 'start') {
        if (run == false) {
            run = true
            dispatch()
        }
    }
    else if (msg == 'stop') {
	    run = false
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

function dispatch() {
    if (run) {
        console.log('dispatch()')
        setTimeout(dispatch, DISPATCH_INTERVAL)
        
        elem.dispatchEvent(event)
    }
}

init()

console.log('tube-weaver started')

