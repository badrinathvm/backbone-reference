/**
 * Created by Badri on 5/28/17.
 */
define([
    'jquery',
        'underscore',
    'backbone',
    'text!templates/home.hbs',
    'views/TodoView',
    'views/TodoCollectionView',
    'models/todo',
    'collections/TodoCollection'
    ],

    function($,_,Backbone,HomeTemplate,TodoView,TodoCollectionView,TodoModel,TodoCollectionModel){

    'use strict';

     var AppView = Backbone.View.extend({

         tagName: 'li',

         template: _.template(HomeTemplate),

         initialize: function(){
                this.render();
        },

         render: function(){

             // only one to do Item
               /* var todoItem = new TodoModel({description: "Pick Groceries from Costco", status:"complete"});

                var todoView = new TodoView({
                    model: todoItem
                });

                todoView.render();*/

                // Collection of to do items

                var todoCollection = new TodoCollectionModel([
                    {
                        description: 'Pick Groceries from Costco',
                        status: "complete"
                    },
                    {
                        description: 'Pick Fruits from Whole Foods',
                        status: "incomplete"
                    },
                    {
                        description: 'Grab Pizza from Blaze',
                        status: "incomplete"
                    }
                ]);

                var todoCollectionView = new TodoCollectionView({collection:todoCollection});
                todoCollectionView.render();
         }

     }) ;

    return AppView;
});
