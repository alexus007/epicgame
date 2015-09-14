define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
){
    var app = {};
    app.wsEvents = new _.extend({}, Backbone.Events);
    return app;
});
