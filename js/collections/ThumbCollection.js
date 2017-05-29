/**
 * Created by Badri on 5/29/17.
 */
define(['jquery', 'underscore', 'backbone', 'models/ThumbModel'],

    function ($, _, Backbone, ThumbModel) {

    'use strict';

        var ThumbCollection = Backbone.Collection.extend({
            model: ThumbModel
        });

        return ThumbCollection;
    });


/**
 * Created by Badri on 5/29/17.
 */
