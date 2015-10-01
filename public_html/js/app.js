define([
    'jquery',
    'underscore',
    'backbone',
    'utils/storage/form_storage'
], function(
    $,
    _,
    Backbone,
    FormStorage
){
    var app = {
        "storage": {
            "loginStorage": new FormStorage("login"),
            "registerStorage": new FormStorage("register")
        }
    };
    app.wsEvents = new _.extend({}, Backbone.Events);
    return app;
});
