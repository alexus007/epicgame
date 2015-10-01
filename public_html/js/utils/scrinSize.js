define([
    'app'
], function(
    app
){
    var ScreenSize = function(options) {
        options = options || {};
        this.Width = options.width || undefined;
        this.Height = options.height || undefined;

        this.getScript = function () {
            return this;
        };

        this.getWidth = function () {
            if(!this.Width)
                return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            else
                return this.Width;
        };

        this.getHeight = function () {
            if(!this.Height)
                return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            else
                return this.Height;

        };

        /**
         * @returns {{top: number, left: number}}
         */
        this.getScreenCenter = function () {
            return {
                top: (this.getHeight() / 2),
                left: (this.getWidth() / 2)
            };
        };
    };

    return ScreenSize;
});
