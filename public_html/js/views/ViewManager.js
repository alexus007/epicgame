define([
    'views/main',
    'views/login',
    'views/scoreboard',
    'app'
], function(
    Main,
    Login,
    Scoreboard,
    app
){

    var ViewManager = Backbone.View.extend({

        MAIN_VIEW: "main",
        LOGIN_VIEW: "login",
        SCOREBOARD_VIEW: "scoreboard",

        views: {
            MAIN_VIEW: null,
            LOGIN_VIEW: null,
            SCOREBOARD_VIEW: null,
        },

        currentView: null,
        preloadView: null,

        initialize: function () {

            this.views[this.MAIN_VIEW] = new Main();
            this.views[this.LOGIN_VIEW] = new Login();
            this.views[this.SCOREBOARD_VIEW] = new Scoreboard();

            this.listenTo(app.wsEvents, "wsStartGame", this.startGame);
        },

        navigateToMain: function() {
            if(this.currentView == this.views[this.MAIN_VIEW]) {
                this.currentView.load();
            } else {
                app.router.navigateToMain();
            }
        },

        displayView: function(viewKey) {

            var view = this.views[viewKey];

            if(view.loginRequire == true &&
                app.session.get('loggedIn') == false) {

                if(this.currentView != null) {
                    app.notify.notify("Вы должны быть авторизованны для перехода на эту страницу",
                        app.notify.notify.ERROR_STATUS);
                }
                this.navigateToMain();

            } else {

                if (this.currentView != null) {
                    this.currentView.dispose();
                }
                view.load();
                this.currentView = view;
            }
        },

        startGame: function(options) {

            var gameView = this.views[this.GAME_VIEW];

            if(app.isTouchDevice) {
                app.router.navigateTo("controller");
            } else {
                app.router.navigateTo("game");
                gameView.start.call(gameView, options);
            }
        }
    });

    return ViewManager;
});
