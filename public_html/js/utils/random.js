define([
    'app'
], function(
    app
){
    var Random = function(options) {
        options = options || {};
        this.min = options.min || 0;
        this.max = options.max || 100;

        this.getRandom = function() {
            return Math.random();
        };

        this.getRandomArbitary = function() {
            return Math.random() * (this.max - this.min) + this.min;
        };

        this.getRandomInt = function() {
            return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        }
    };

    return Random;
});
