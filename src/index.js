import { Player, PlayerEvent } from 'bitmovin-player/modules/bitmovinplayer-core';
import { Playlist } from 'hardiman-bitmovin-playlist-lib';
import EngineBitmovinModule from 'bitmovin-player/modules/bitmovinplayer-engine-bitmovin';
import MseRendererModule from 'bitmovin-player/modules/bitmovinplayer-mserenderer';
import HlsModule from 'bitmovin-player/modules/bitmovinplayer-hls';
import AbrModule from 'bitmovin-player/modules/bitmovinplayer-abr';
import ContainerTSModule from 'bitmovin-player/modules/bitmovinplayer-container-ts';
import SubtitlesModule from 'bitmovin-player/modules/bitmovinplayer-subtitles';
import SubtitlesCEA608Module from 'bitmovin-player/modules/bitmovinplayer-subtitles-cea608';
import PolyfillModule from 'bitmovin-player/modules/bitmovinplayer-polyfill';
import StyleModule from 'bitmovin-player/modules/bitmovinplayer-style';

import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';

Player.addModule(EngineBitmovinModule);
Player.addModule(MseRendererModule);
Player.addModule(HlsModule);
Player.addModule(AbrModule);
Player.addModule(ContainerTSModule);
Player.addModule(SubtitlesModule);
Player.addModule(SubtitlesCEA608Module);
Player.addModule(PolyfillModule);
Player.addModule(StyleModule);

const conf = {
    key: 'YOUR KEY HERE',
    ui: false
};

let sources = [
    {
        title: 'First Video',
        description: 'This is the first video in the lineup',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
    },
    {
        title: 'Second Video',
        description: 'This is the second video in the lineup',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    },    
    {
        title: 'Third Video',
        description: 'This is the third video in the lineup',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    },    
    {
        title: 'Fourth Video',
        description: 'This is the fourth video in the lineup',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    },
    {
        title: 'Fifth Video',
        description: 'This is the fifth video in the lineup',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    },
];

const source = {
    hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
};

const player = new Player(document.getElementById('player'), conf);

UIFactory.buildDefaultUI(player);

const playlist = new Playlist(player, sources, 0, 2, 0, true);

playlist.loadPlaylist();

document.getElementById('skip').addEventListener('click', () => {
    // console.log("milestones: " + displayQuater + " , " + displayHalf + " , " + displayThreeQuarters +  " , " + displayComplete);
    // const currentSource = player.getSource();
    // const skipIndex = sources.indexOf(currentSource);
    // if (sources[skipIndex + 1]) {
    //     player.load(sources[skipIndex + 1]).then(() => {
    //         player.play();
    //     });
    // } else {
    //     player.unload();
    //     document.getElementById('secret').innerHTML = 'Playlist Complete';
    // }
    // player.off(PlayerEvent.TimeChanged, () => {
    //     console.log("CANCELLED");
    // });
    playlist.skip();
});

document.getElementById('previous').addEventListener('click', () => {
    // const currentSource = player.getSource();
    // const prevIndex = sources.indexOf(currentSource);
    // if (sources[prevIndex - 1]) {
    //     player.load(sources[prevIndex - 1]).then(() => {
    //         player.play();
    //     });
    // } else {
    //     player.load(currentSource).then(() => {
    //         player.play();
    //     });
    // }
    // player.off(PlayerEvent.TimeChanged, () => {
    //     console.log("CANCELLED");
    // });
    playlist.previous();
});

// player.on(PlayerEvent.PlaybackFinished, () => {
//     console.log("FINISHED");
//     setTimeout(() => {
//         loadNext(player.getSource());
//     }, 5000);
// });

// let displayQuater = true;
// let displayHalf = true;
// let displayThreeQuarters = true;
// let displayComplete = true;
// player.on(PlayerEvent.TimeChanged, () => {
//     console.log(Math.trunc(player.getDuration()/4));
//     console.log(player.getCurrentTime());
//     console.log(Math.floor(player.getDuration()));
//     if(Math.trunc(player.getCurrentTime()) == Math.trunc(player.getDuration()*0.25) && displayQuater) {
//         window.alert('Your video is 25% complete.')
//         displayQuater = false;
//     }
//     if(Math.trunc(player.getCurrentTime()) == Math.trunc(player.getDuration()*0.5) && displayHalf) {
//         window.alert('Your video is 50% complete.')
//         player.off(PlayerEvent.TimeChanged, () => {});
//         displayHalf = false;
//     }
//     if(Math.trunc(player.getCurrentTime()) == Math.trunc(player.getDuration()*0.75) && displayThreeQuarters) {
//         window.alert('Your video is 75% complete.')
//         displayThreeQuarters = false;
//     }
//     if(Math.trunc(player.getCurrentTime()) == Math.trunc(player.getDuration()) && displayComplete) {
//         window.alert('Your video is 100% complete.')
//         displayComplete = false;
//     }
// });

// player.load(sources[0]).then(() => {
//     console.log('Successfully loaded source with name: ' + sources[0].title);
//     player.seek(10);
// }, (error) => {
//     console.log('Error while loading source', error);
// });

// function loadNext(currentSource) {
//     const index = sources.indexOf(currentSource);
//     if (sources[index + 1]) {
//         player.load(sources[index + 1]).then(() => {
//             console.log('Successfully loaded source with name: ' + sources[index + 1].title);
//         });
//     }
// };