define([
    'app',
    'tmpl/game',
    'views/AbstractScreen'
], function(
    app,
    tmpl,
    Abstract
){

    var View = Abstract.extend({

        el: '#page',
        template: tmpl,
        templateArg: null,


    });

    return View;
});