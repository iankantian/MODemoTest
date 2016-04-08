/**
 * Created by joshuabrown on 4/1/16.
 */
videojs.plugin('ads-setup', function (opts) {
    var player = this;
    var adsCancelTimeout = 3000;

    var vastAd = player.vastClient({
        //Media tag URL
        adTagUrl: "http://pubads.g.doubleclick.net/gampad/ads?env=....",
        playAdAlways: true,
        //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
        adCancelTimeout: adsCancelTimeout,
        adsEnabled: !!options.adsEnabled
    });
});

var player = videojs('player');
var playerNext = document.getElementById( 'next' );
var playerPrevious = document.getElementById( 'previous' );
var playerPlay = document.getElementById( 'play' );
playerPlay.addEventListener('click', function(){
    player.play();
    // console.log( player.prev() );
});
