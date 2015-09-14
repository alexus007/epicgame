define([
    'app',
    'tmpl/scoreboard',
    'views/AbstractScreen'
], function(
    Backbone,
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