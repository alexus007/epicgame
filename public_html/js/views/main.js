define([
    'app',
    'tmpl/main',
    'views/AbstractScreen',
    'utils/timer',
    'utils/random'
], function (app,
             tmpl,
             Abstract,
             Timer,
             Random
) {

    var View = Abstract.extend({
        el: '#page',
        template: tmpl,
        templateArg: null,

        initialize: function () {
            var timer = new Timer({interval: 5000, method: this.lightAnimation});
            timer.start();
        },

        lightAnimation: function () {
            var imagesSrc = ['/images/round.png', '/images/round1.png', '/images/round2.png', '/images/round3.png'];
            var positionRandom = new Random({min:0,max:100}).getRandomArbitary();
            var imageSrcRandom = new Random({min:0, max:imagesSrc.length - 1}).getRandomInt();
            console.log(positionRandom, imageSrcRandom);
            var img = new Image();
            img.src = imagesSrc[imageSrcRandom];
            img.which = 100;
            img.height = 100;
            this.$('body').append(img);
            this.$(img).css({position:'absolute', left: positionRandom + "%", top: positionRandom + "%", zIndex:0}).animate({width:200,height:200,opacity:0.99},1000);
            this.$(img).animate({opacity:0},1000);
        }

    });

    return View;
});