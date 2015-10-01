define([
    'app',
    'utils/random'
], function(
    app,
    Random
){
    var Images = function(options) {
        options = options || {};
        this.srcs = options.src || ['/images/round.png', '/images/round1.png', '/images/round2.png', '/images/round3.png'];
        this.width = options.width || 0;
        this.height = options.height || 0;
        this.position = options.position || 'absolute';
        this.left = options.left || false;
        this.top = options.top || false;
        this.right = options.right || false;
        this.bottom = options.bottom || false;
        this.elInner = options.elInner || 'body';
        this.animate = options.animate || true;

        this.img = null;

        this.getImage = function () {
            var positionRandom = new Random({min:0,max:70}).getRandomArbitary();
            var imageSrcRandom = new Random({min:0, max: this.srcs.length - 1}).getRandomInt();

            this.img = new Image();
            this.img.src = this.srcs[imageSrcRandom];
            this.img.which = this.width;
            this.img.height = this.height;
            $(this.elInner).append(this.img);
            $(this.elInner).css({backgroundImage: 'url('+ this.img.src +');'});
            var position = {};
            position.position = this.position;
            if(this.left)
                position.left = positionRandom + "%";
            if(this.right)
                position.right = positionRandom + "%";
            if(this.top)
                position.top = positionRandom + "%";
            if(this.bottom)
                position.bootom = positionRandom + "%";

            position.zIndex = 0;

            //console.log(position);
            $(this.img).css(position);
            if(this.animate === true)
                this.animateImage();
        };

        this.animateImage = function() {
            $(this.img).animate({width:200,height:200,opacity:0.5},5000);
            $(this.img).animate({width:0,height:0,opacity:0},5000, function() {$(this).remove()});
        }

    };

    return Images;
});
