var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({

        // Do grunt-related things in here

        pkg: grunt.file.readJSON('package.json'),

        // Handlebars compilation task
        handlebars: {
            compile: {
                options: {

                    // Remove folder path name from file
                    processName: function (fileName) {
                        return path.basename(fileName, '.hbs');
                    },

                    namespace: "Handlebars.templates",
                    amd: true
                },
                files: {
                    'js/templates/compiled/home.js':'js/templates/home.hbs'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['handlebars']);

};

