/*global module:false*/

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: 'grunt-talk',
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
