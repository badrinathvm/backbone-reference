/**
 * Created by Badri on 5/29/17.
 */
define(['jquery', 'underscore', 'backbone', 'templates/compiled/thumbs'], function ($, _, Backbone, Template) {

    'use strict';

    var ThumbView = Backbone.View.extend({

        el: $('body'),

        initialize: function () {
            this.render();
        },

        render: function () {
            console.log("Data is" + this.model);
            this.$el.append(Template.thumbs({
                name: this.model.get('name'),
                description: this.model.get('description'),
                src: this.model.get('src')
            }));

            return this;
        }
    });

    return ThumbView;
});
