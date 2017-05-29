/**
 * Created by Badri on 5/28/17.
 */
define(['jquery',
    'underscore',
    'backbone',
        'text!templates/home.hbs',
    'handlebars',
    'templates/compiled/home'],
    function($,_,Backbone,HomeTemplate,Handlebars,Templates){

    'use strict';

     var TodoView = Backbone.View.extend({

         tagName: 'li',

         el: $('body'),

         //template: _.template( HomeTemplate ),
         //template: Templates['home.hbs'],
         //template: Templates.HomeTemplate,

         initiliaze: function(){

         },

         render:function(){

             //Place for rendering the template

             this.$el.append(Templates.home({
                 description: this.model.get('description'),
                 status: this.model.get('status')
             }));

             return this;
         }
     });

    return TodoView;

});
