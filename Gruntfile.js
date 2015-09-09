/**
 * Created by Alex on 09.09.2015.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        concat: {},
        web_server: {
            options: {
                cors: true,
                port: 8000,
                nevercache: true,
                logRequests: true
            },
            foo: 'bar' // For some reason an extra key with a non-object value is necessary
        },
        fest:{
            templates:{
                files: [{
                    expand:true,
                    cwd: 'templates',
                    src: '*.xml',
                    dest:'public_html/js/tmpl'
                }],
            }
        }

    });

    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-sell');
    grunt.loadNpmTasks('grunt-web-server');
    grunt.loadNpmTasks('grunt-fest');

    grunt.registerTask('default', ['web_server', 'fest:templates']);
};

