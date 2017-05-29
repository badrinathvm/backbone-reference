module.exports = function(grunt) {
    grunt.initConfig({
        server: {
            port: 9000,
            base: '.'
        },

        watch: {
            files: ['backbone-reference/js/**/*.js'],
            tasks: 'exec'
        },

        exec: {
            jasmine: {
                command: 'phantomjs test/lib/run-jasmine.js http://localhost:8000/test',
                stdout: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', 'server exec watch');

}
