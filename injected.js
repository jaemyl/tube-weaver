console.log('injected.js')

const events = []

function captureMouseOver() {
    console.log('captureMouseOver() >>>')
    const target = document.querySelector('video')
    console.log('target:' + target)
    target.addEventListener('mouseover', (ev) => {
        console.log('capturing a mouseover event')
        events.push(ev)
        console.log('events.length:' + events.length)
    }, true)
    console.log('captureMouseOver() |||')
}

function fireCapturedEvents() {
    console.log('fireCapturedEvents() >>>')
    const target = document.querySelector('#movie_player')
    events.forEach((ev) => {
        target.dispatchEvent(ev)
        console.log('fire!')
    })
    console.log('fireCapturedEvents() |||')
}

captureMouseOver()
setInterval(fireCapturedEvents, 3000)

/*
function simulateMouseOver() {
    console.log('simulateMouseOver()')
    const event = new MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    })
    const target = document.querySelector('#movie_player')
    const canceled = !target.dispatchEvent(event)
    if (canceled) {
        console.log('canceled')
    }
    else {
        console.log('not canceled')
    }
}

setInterval(simulateMouseOver, 1000)
*/

/*
console.log('typeof _yt_player.Bq:' + typeof _yt_player.Bq)

let Bq_orig = null
let Bq_hijack = function(a, b) {
    console.log('Bq_hijack() >>>')
    Bq_orig.call(_yt_player, a, b)
    console.log('Bq_hijack() |||')
}

if (_yt_player.Bq !== undefined) {
    Bq_orig = _yt_player.Bq
    _yt_player.Bq = Bq_hijack
}
*/
