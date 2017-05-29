/**
 * Created by Badri on 5/28/17.
 */
define(['jquery',
    'underscore',
    'backbone',
        'text!templates/home.hbs'],
    function($,_,Backbone,HomeTemplate){

    'use strict';

     var TodoView = Backbone.View.extend({

         tagName: 'li',

         el: $('body'),

         template: _.template( HomeTemplate ),

         initiliaze: function(){
             this.content = $("#data");
         },

         render:function(){
                console.log("Inside TodoView");
                this.$el.html(this.template);
         }
     });

    return TodoView;

});
