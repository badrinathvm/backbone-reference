/**
 * Created by Badri on 5/28/17.
 */
define([
    'jquery',
        'underscore',
    'backbone',
    'text!templates/home.hbs',
    'views/TodoView',
    'models/todo'
    ],

    function($,_,Backbone,HomeTemplate,TodoView,Todo){

    'use strict';

     var AppView = Backbone.View.extend({

         tagName: 'li',

         template: _.template(HomeTemplate),

         initialize: function(){
                this.render();
        },

         render: function(){
                console.log("Control inside Render function");

                var todoItem = new Todo({description: "Pick Groceries from Costco", status:"complete"});

                var todoView = new TodoView({
                    model: todoItem
                });
                //console.log(todoView.render().el);
                todoView.render();
                //$(document.body).append( todoView.render().$el);
         }

     }) ;

    return AppView;
});
