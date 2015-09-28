define([
    'views/main',
    'views/login',
    'views/scoreboard',
    'views/game',
    'views/registration',
    'app'
], function(
    Main,
    Login,
    Scoreboard,
    Game,
    Registration,
    app
){

    var ViewManager = Backbone.View.extend({

        MAIN_VIEW: "main",
        LOGIN_VIEW: "login",
        SCOREBOARD_VIEW: "scoreboard",
        GAME_VIEW: "game",
        REGISTRATION_VIEW: "registration",

        views: {
            MAIN_VIEW: null,
            LOGIN_VIEW: null,
            SCOREBOARD_VIEW: null,
            GAME_VIEW: null,
            REGISTRATION_VIEW: null
        },

        currentView: null,
        preloadView: null,

        initialize: function () {

            this.views[this.MAIN_VIEW] = new Main();
            this.views[this.LOGIN_VIEW] = new Login();
            this.views[this.SCOREBOARD_VIEW] = new Scoreboard();
            this.views[this.GAME_VIEW] = new Game();
            this.views[this.REGISTRATION_VIEW] = new Registration();

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
