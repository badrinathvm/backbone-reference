/**
 * Created by Badri on 5/29/17.
 */
define(['jquery','underscore','backbone','views/ThumbView'],function($,_,Backbone,ThumbView){

    'use strict';

    var ThumbCollectionView = Backbone.View.extend({

        initialize: function(){
            this.render();
        },

        render:function(){
            this.collection.each(function(thumbData){
               new ThumbView({
                    model:thumbData
                });
            },this);

            return this;
        }

    });

    return ThumbCollectionView;

});
