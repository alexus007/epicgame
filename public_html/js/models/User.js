define([
], function(
){

    var User = Backbone.Model.extend({
        defaults: {
            "user_id": "",
            "login": "",
            "email": "",
            "password": "",
            "global_rating": 0,
            "isLogin": false
        }
    });

    return User;
});
