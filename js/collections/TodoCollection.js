/**
 * Created by Badri on 5/29/17.
 */
define(['jquery','underscore','backbone','models/todo'],
    function ($,_,Backbone,Todo) {

    'use strict';

    var TodoCollection = Backbone.Collection.extend({
        model: Todo
    });

    return TodoCollection;

});
