$(function() {
    $('#slider').layerSlider({
 
        autoStart               : true,
        firstLayer              : 1,
        twoWaySlideshow         : false,
        slidedirection          : 'top',
        keybNav                 : true,
        touchNav                : true,
        imgPreload              : true,
        navPrevNext             : true,
        navStartStop            : false,
        navButtons              : true,
        skin                    : 'noskin',
        skinsPath               : 'layerslider/skins/',
        pauseOnHover            : true,
        globalBGColor           : 'transparent',
        globalBGImage           : false,
        animateFirstLayer       : true,
        yourLogo                : false,
        yourLogoStyle           : 'position: absolute; z-index: 1001; left: 10px; top: 10px;',
        yourLogoLink            : false,
        yourLogoTarget          : '_blank',
        loops                   : 0,
        forceLoopNum            : true,
        autoPlayVideos          : true,
        autoPauseSlideshow      : 'auto'
    });
});