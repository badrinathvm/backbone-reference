'use strict';
var paths = {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore',
    backbone: '../node_modules/backbone/backbone',
    backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
    text: '../node_modules/requirejs-text/text',
    //handlebars: '../node_modules/handlebars/lib/handlebars'
    handlebars: '../node_modules/handlebars-runtime/handlebars.runtime'
    //handlebars: 'lib/handlebars.runtime'
};
//Require.js allows us to configure shortcut alias
require.config({
    //shim config allows us to configure dependencies.
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: paths
});
require(['backbone', 'views/app'],
    function (Backbone, AppView) {
        Backbone.history.start();
        new AppView();
    });
