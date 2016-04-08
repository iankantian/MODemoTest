# Testing of MailOnline's videojs-vast-vpaid plugin
[![Build Status](https://travis-ci.org/MailOnline/videojs-vast-vpaid.svg?branch=master)](https://travis-ci.org/MailOnline/videojs-vast-vpaid)
#### [DEMO HERE!!!](http://mailonline.github.io/videojs-vast-vpaid)
                       
The demo has a comprehensive environment, with full stack javascript, node modules, and well executed gulp task with a menu generated on the console, bower, linting, kharma, Grunting, etc....

However, I would rather just use the plugin, and not the whole environment.  The development cycle on it is a bit clunky for my taste.  With strict linting, I can't write partial code, only complete and production ready code.  So simple tests aren't an option.  

Solution: step by step bringing over the mvp for the plugin to see how it works and actually be able to follow what on Earth it's doing!

Following the recipe for using their plugin and adding notes along the way:

## Integration with video.js 4 and 5
To integrate the plugin with videoJs you need to:

**1- Add [all files from MailOnline/videojs-vast-vpaid/RELEASE/bin](https://github.com/MailOnline/videojs-vast-vpaid/tree/RELEASE/bin) to some path in your server**
You know, 'some path'.  What I'm going to do is put these into some path**s**.  *.css is going into a style folder, *.js is going into the js folder, and that binary is going into the... bin folder.
**2- If you don't have videoJs, add it's scripts and stylesheet to your page**
```html
<!-- Video.js 4 -->
<link href="http://vjs.zencdn.net/4.12/video-js.css" rel="stylesheet">
<script src="http://vjs.zencdn.net/4.12/video.js"></script>
```
or
```html
<!-- Video.js 5 -->
<link href="http://vjs.zencdn.net/5.4.6/video-js.css" rel="stylesheet">
<script src="http://vjs.zencdn.net/5.4.6/video.js"></script>
```

**3- After videoJs add the plugin script stylesheet**
```html
<!-- Common -->
<link href="/path/to/videojs.vast.vpaid.min.css" rel="stylesheet">
```
so in my build I'm using:
<link href="styles/videojs.vast.vpaid.css" rel="stylesheet">

and the videojs version specific plugin
```html
<!-- Video.js 4 -->
<script src="/path/to/videojs_4.vast.vpaid.min.js"></script>
```
or
```html
<!-- Video.js 5 -->
<script src="/path/to/videojs_5.vast.vpaid.min.js"></script>
```
in my build:
<script src="js/videojs_5.vast.vpaid.js"></script>
Be AWARE.  It is at this point your browser terminal will Warn:
video.js:18568VIDEOJS: WARN: Constructor logic via init() is deprecated; please use constructor() instead.  So theres some legacy code somewhere in there... not fixing, just moving on!

if you need to support older browsers that don't support ES5 add this to your page before the plugin script
```html
<script src="/path/to/es5-shim.js"></script>
```
if you need to support ie8 add this after the es5-shim.js script
```html
<script src="/path/to/ie8fix.js"></script>
```
I'm adding both now so I don't forget later.  But my grandma, when she was still alive was using fully updated Chrome, so, people get with the program!

**4- Create you own ads plugin to pass an add media tag to the plugin**

Below you have a simple ads-setup-plugin

```javascript
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
```

You can also configure the vast plugin using the data-setup attribute

```html
<video id="example_video_1" class="video-js vjs-default-skin"
    controls preload="auto" width="640" height="264"
    poster="http://vjs.zencdn.net/v/oceans.png"
    data-setup='{
      "plugins": {
      "vastClient": {
        "adTagUrl": "http://pubads.g.doubleclick.net/gampad/ads?env=....",
        "adsCancelTimeout": 5000,
        "adsEnabled": true
        }
      }
    }'>
  <source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4'/>
  <source src="http://vjs.zencdn.net/v/oceans.webm" type='video/webm'/>
  <source src="http://vjs.zencdn.net/v/oceans.ogv" type='video/ogg'/>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
  </p>
</video>
```

---