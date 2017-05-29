/**
 * Created by Badri on 5/29/17.
 */
/**
 * Created by Badri on 5/28/17.
 */
define(['jquery',
        'underscore',
        'backbone'
    ],
    function ($, _, Backbone) {
        'use strict';
        var ThumbModel = Backbone.Model.extend({
            defaults: {
                name: "Cutest dog ever",
                description: "This puppy is so cute, she makes toddlers throw fits",
                src: "http://lorempixel.com/400/300/animals/",
                rating: {
                    "starRating": "3.5",
                    "count": "5"
                },
                price: {
                    "sale": "$100,000",
                    "regular": "$100,000,000"
                }
            }
        });
        return ThumbModel;
    });
