console.log('injected.js')
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
