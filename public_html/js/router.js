define([
    'app',
    'views/ViewManager'
], function(
    app,
    ViewManager
){

    var Router = Backbone.Router.extend({
        routes: {
            'game' : 'gameAction',
            'scoreboard' : 'scoreboardAction',
            'login' : 'loginAction',
            'registration' : 'registrationAction',
            '*default': 'defaultAction'
        },

        viewManager: null,

        initialize: function () {
            this.viewManager = new ViewManager();
        },

        navigateToMain: function() {
            this.navigateTo("#");
        },

        navigateTo: function(url) {
            this.navigate(url, {trigger: true});
        },

        showView: function(view) {
            console.log(view);
            this.viewManager.displayView(view);
        },

        /* ================ Navigate Utils ================ */

        defaultAction: function () {
            this.showView(this.viewManager.MAIN_VIEW);
        },

        loginAction: function() {
            this.showView(this.viewManager.LOGIN_VIEW);
        },

        scoreboardAction: function () {
            this.showView(this.viewManager.SCOREBOARD_VIEW);
        },

        gameAction: function() {
            this.showView(this.viewManager.GAME_VIEW);
        },

        registrationAction: function() {
            this.showView(this.viewManager.REGISTRATION_VIEW);
        }



    });

    return Router;
});