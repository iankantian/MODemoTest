/**
 * Created by joshuabrown on 4/1/16.
 */
var player = videojs('player');
var playerNext = document.getElementById( 'next' );
var playerPrevious = document.getElementById( 'previous' );
var playerPlay = document.getElementById( 'play' );
playerPlay.addEventListener('click', function(){
    player.play();
    // console.log( player.prev() );
});


// $('[data-action=prev]').on('click', function(e) {
//     player.prev();
// });
// $('[data-action=next]').on('click', function(e) {
//     player.next();
// });

// This object is only used with the playlist, so, for now hardcode single video in index.html
// var videos = [
//     {
//         src : [
//             'http://stream.flowplayer.org/bauhaus/624x260.webm',
//             'http://stream.flowplayer.org/bauhaus/624x260.mp4',
//             'http://stream.flowplayer.org/bauhaus/624x260.ogv'
//         ],
//         poster : 'http://flowplayer.org/media/img/demos/minimalist.jpg',
//         title : 'Video 1'
//     },
//     {
//         src : [
//             'http://stream.flowplayer.org/night3/640x360.webm',
//             'http://stream.flowplayer.org/night3/640x360.mp4',
//             'http://stream.flowplayer.org/night3/640x360.ogv'
//         ],
//         poster : 'http://flowplayer.org/media/img/demos/playlist/railway_station.jpg',
//         title : 'Video 2'
//     },
//     {
//         src : [
//             'http://stream.flowplayer.org/functional/624x260.webm',
//             'http://stream.flowplayer.org/functional/624x260.mp4',
//             'http://stream.flowplayer.org/functional/624x260.ogv'
//         ],
//         poster : 'http://flowplayer.org/media/img/demos/functional.jpg',
//         title : 'Video 3'
//     }
// ];

/*Todo on hitting player.prev() during Vast Ad, the skip window doesn't go away every time! */
// player.muted( false );

// .ads(); method is to allow the .vast() method access to the various events that you get access to.
// player.ads();
// commented out .vast to try a different plugin...
// player.vast({
//     url: 'assets/ad/sample-vast.xml'
// });

// Remove the playlist funcitons for now...
// player.playList(videos, {
//     getVideoSource: function(vid, cb) {
//         cb(vid.src, vid.poster);
//     }
// });
//
// playerNext.addEventListener('click', function(){
//     player.next();
//     // console.log( player.next() );
// });
// playerPrevious.addEventListener('click', function(){
//     player.prev();
//     // console.log( player.prev() );
// });



// // var testString = 'player';
//    var testString = 'vid1_html5_api';
// setInterval ( function(){
//
//     console.log( 'josh requested the video object ', document.getElementById( testString ) );
// //        player.dimensions('100', '100');
// }, 1000 );