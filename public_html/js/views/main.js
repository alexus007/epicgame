define([
    'app',
    'tmpl/main',
    'views/AbstractScreen',
    'utils/timer',
    'utils/imagesCreater'
], function (app,
             tmpl,
             Abstract,
             Timer,
             Images
) {

    var View = Abstract.extend({
        el: '#page',
        template: tmpl,
        templateArg: null,
        timers : [],

        initialize: function () {
                var self = this;
                setInterval(function() {
                    self.showScreensaver();
                    //console.log('tick');
                }, 25000);

        },

        events: {
            "mousemove" : "clearTimer",
            "mouseover #page" : "clearTimer"
        },

        showScreensaver : function () {

            var timer = new Timer({interval: 5000, method: this.lightAnimation});
            timer.start();

            //var timer1 = new Timer({interval: 10000, method: this.lightAnimation});
            //timer1.start();

            var timer2 = new Timer({interval: 20000, method: this.lightAnimation});
            timer2.start();
            this.timers.push(timer);
            //this.timers.push(timer1);
            this.timers.push(timer2);
        },

        lightAnimation: function () {
            var images = new Images({width:50, height:50, left: true, top: true}).getImage();
            var images2 = new Images({width:100, height:100, right: true, top: true}).getImage();
            var images3 = new Images({width:150, height:150, top: true, bottom: true}).getImage();
        },

        clearTimer : function () {
            var self = this;
            _.each(self.timers, function(timer) {
                //console.log(timer);
                timer.stop();
            });
        }

    });

    return View;
});