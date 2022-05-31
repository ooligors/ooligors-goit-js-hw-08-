import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const func = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);

    console.log(data);
};

player.on('timeupdate', throttle(func, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

// player.off('play', function (data) {
//     localStorage.setItem('asedasdaaswwwecdf;flcgklsd;k', data);
// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });


