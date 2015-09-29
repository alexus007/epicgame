define([
    'app'
], function(
    app
){
    var Timer = function(options) {
        options = options || {};
        this.active = false;
        this.interval = options.interval || 1000;
        this.method = options.method || null;


        // starts the timer with given interval
        this.start = function() {
            if(!this.active) {
                this.active = true;
                this.timerObject = setInterval(this.method, this.interval);
            }
        };

        // stops timer
        this.stop = function() {
            this.active = false;
            clearInterval(this.timerObject);
        };

        _.bindAll(this, 'start', 'stop')
    };

    return Timer;
});