/**
 * Created by Badri on 5/28/17.
 */

define(['jquery',
        'underscore',
        'backbone'],
    function($,_,Backbone){

    'use strict';

    var Todo = Backbone.Model.extend({

        defaults:{
            description : "Pick Medicine",
            status: "Complete"
        }

    });

    return Todo;
});


