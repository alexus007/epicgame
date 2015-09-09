/**
 * Created by Alex on 09.09.2015.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        concat:{

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
};
