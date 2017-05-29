/**
 * Created by Badri on 5/29/17.
 */
define(['jquery', 'underscore', 'collections/TodoCollection'], function ($, _, TodoCollection) {
    'use strict';
    var collections = new TodoCollection([{
            description: 'Pick Groceries from Costco',
            status: "complete"
        },
        {
            description: 'Pick Fruits from Whole Foods',
            status: "incomplete"
        },
        {
            description: 'Grab Pizza from Blaze',
            status: "incomplete"
        },
        {
            description: 'Watch Movie',
            status: "complete"
        }
    ]);
    return collections;
});
