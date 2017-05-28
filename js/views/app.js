/**
 * Created by Badri on 5/28/17.
 */
define([
    'jquery',
        'underscore',
    'backbone',
    'text!templates/home.hbs'
    ],

    function($,_,Backbone,HomeTemplate){

    'use strict';

     var AppView = Backbone.View.extend({

         template: _.template(HomeTemplate),

         initialize: function(){

        },

         render: function(){
                console.log("Control inside Render function");
         }

     }) ;

    return AppView;
});
