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
             console.log(this.template);
                /*this.$el.html(this.template({
                    model:"AAAA"
                }));*/

             this.$el.append(Templates.home({model:"AAAA"}));
             return this;
         }
     });

    return TodoView;

});
