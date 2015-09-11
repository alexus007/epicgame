define([
    'backbone',
    'views/main',
    'views/scoreboard',
    'views/game',
    'views/login',
], function(
    Backbone,
    mainView,
    scoreboardView,
    gameView,
    loginView
){

    $('#page').append(mainView.el);
    mainView.hide();
    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            mainView.show();
        },
        scoreboardAction: function () {
            scoreboardView.show();
        },
        gameAction: function () {
            gameView.show();
        },
        loginAction: function () {
            loginView.show();
        }
    });

    return new Router();
});