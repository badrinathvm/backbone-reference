/**
 * Created by Badri on 5/29/17.
 */
define(['jquery', 'underscore', 'backbone', 'views/TodoView'],
    function ($, _, Backbone, TodoView) {

        'use strict';

        var TodoCollectionView = Backbone.View.extend({

            initialize: function () {
                this.render();
            },

            render: function () {
                this.collection.each(function (todo) {
                    var todoView = new TodoView({
                        model: todo
                    });
                    todoView.render();
                }, this);
                return this;
            }

        });
        return TodoCollectionView;
    });
