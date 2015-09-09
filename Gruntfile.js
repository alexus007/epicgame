/**
 * Created by Alex on 09.09.2015.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        concat: {},
        web_server: {
            options: {
                cors: true,
                port: 8080,
                nevercache: false,
                logRequests: false,
            },
            path: 'public_html',
        },
        fest:{
            templates:{
                files: [{
                    expand:true,
                    cwd: 'templates',
                    src: '*.xml',
                    dest:'public_html/js/tmpl'
                }],

                template:function(data){

                return grunt.template.process(
                    'var <%= name %>Teml = <%= contents %>;',
                    {data: data}
                );

                },
            },
        },
        watch: {
            fest: {
                files: ['templates/*.xml'],
                tasks: ['fest'],
                options: {
                    atBegin: true
                }
            },
            server: {
                files: [
                    'public_html/js/**/*.js',
                    'public_html/css/**/*.css'
                ],
                options: {
                    interrupt: true,
                    livereload: true
                }
            }
        },
        concurrent:{
            target: ['web_server', 'watch'],
            options: {
                logConcurrentOutput: true,
            }
        }

    });

    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-sell');
    grunt.loadNpmTasks('grunt-web-server');
    grunt.loadNpmTasks('grunt-fest');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent']);
};

