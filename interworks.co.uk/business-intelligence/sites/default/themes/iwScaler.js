/**
 *  o      |                              |         
 *  .,---.-|-- ,---.,---..     .,---.,---.|,--,---.
 *  ||   | |   |---'|    |  |  || o ||    |   `---.
 *  ``   ' `-- `--  `    `--'--'`---'`    '`--`---'
 * Profile Image Scaler
 */

/*jslint white:false */
/*globals document, jQuery, window */

(function ($) { $(function () {

// widget used for profile bg scaling.
$.fn.iwScaler = function (options) {
    if (0 === this.length) {
        return;
    }

    var win = $(window);
    var doc = $(document);
    var opts = $.extend($.fn.iwScaler.defaults, options || {});
    var els = this;
    var spacer = els.parent();
    var cont = spacer.parent();
    var vAlign = 'middle';

    opts.horizSpace = opts.rightSpace + opts.leftSpace;
    opts.vertSpace = opts.topSpace + opts.bottomSpace;

    if (cont.hasClass('vert-top')) {
        vAlign = 'top';
    } else if (cont.hasClass('vert-bottom')) {
        vAlign = 'bottom';
    } else {
        vAlign = 'center';
    }

    cont.css({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    });
    spacer.css({
        position: 'absolute',
        left: opts.leftSpace,
        top: opts.topSpace,
        overflow: 'hidden'
    });
    els.css({
        zIndex: opts.zIndex,
        visibility: 'visible'
    });
    els.origWidth = 1600;
    els.origHeight = 1065;
    els.origRatio = els.origWidth / els.origHeight;

    var contSizeSet = false;

    function resize(e) {
        var elWidth = 0,
            elHeight = 0,
            elMarginTop = 0,
            elMarginLeft = 0,
            winWidth = win.width(),
            winHeight = win.height(),
            docWidth = Math.max(winWidth, doc.width()),
            docHeight = Math.max(winHeight, doc.height()),
            width = Math.max(docWidth, opts.minWidth),
            height = Math.max(docHeight, opts.minHeight),
            spacerWidth = width - opts.horizSpace,
            spacerHeight = height - opts.vertSpace;

        if (docWidth > winWidth || docHeight > winHeight) {
            cont.css({ width: docWidth, height: docHeight });
            contSizeSet = true;
        } else if (contSizeSet) {
            contSizeSet = false;
            cont.css({ width: '100%', height: '100%' });
        }

        spacer.css({ width: spacerWidth, height: spacerHeight });

        if (width / els.origRatio > height) {
            elHeight = Math.round(width / els.origRatio);
            elWidth = width;
        } else {
            elWidth = Math.round(height * els.origRatio);
            elHeight = height;
            elMarginLeft = -Math.round(Math.abs(width - elWidth) / 2);
        }

        if ('bottom' === vAlign) {
            // elMarginTop = ;
            els.css({ position: 'absolute', bottom: 0 });
            elMarginTop = 0;
            // spacer.css({ position: 'absolute' });
            // els.css({ position: 'absolute', bottom: 0 });
        } else if ('top' === vAlign) {
            elMarginTop = 0;
        } else {
            elMarginTop = (-(elHeight - spacerHeight)/2); ///  - opts.vertSpace;

            // spacer.css({ position: 'absolute' });
            // els.css({ position: 'absolute', top: Math.round((docHeight+opts.vertSpace)/2) });
            // elMarginTop = -Math.round(opts.vertSpace/2);
            els.css({ position: 'absolute', top: elMarginTop });
            elMarginTop = 0;
            // elMarginTop = 0;
        }

        els.css({
            height: elHeight || height,
            width: elWidth || width,
            marginLeft: elMarginLeft || 0,
            marginTop: elMarginTop || 0
        });
    }

    win.bind('resize', resize);
    resize();
};

$.fn.iwScaler.defaults = {
    topSpace: 0,
    rightSpace: 0,
    bottomSpace: 0,
    leftSpace: 0,
    minHeight: 0,
    minWidth: 0,
    zIndex: 100
};

$("img.profile-bg").iwScaler({
    topSpace: $('#header').height(),
    minHeight: 845,
    // Needs to be 905 for IE6
    minWidth: 960
});

}); }(jQuery));

