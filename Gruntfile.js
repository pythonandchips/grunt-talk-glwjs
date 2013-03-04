/*global module:false*/

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: 'grunt-talk',
    jshint: {
      files: ['Gruntfile.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
