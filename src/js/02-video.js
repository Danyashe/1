
    import Player from '@vimeo/player';
    import throttle from "lodash.throttle";
    
    const iframe = document.querySelector("#vimeo-player");
    const player = new Player(iframe);
  
    player.on('timeupdate', throttle(function(data) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
    }, 1000));

    const newTimePlay = JSON.parse(localStorage.getItem("videoplayer-current-time"));

    player.setCurrentTime(newTimePlay.seconds).then(function(seconds) {
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });