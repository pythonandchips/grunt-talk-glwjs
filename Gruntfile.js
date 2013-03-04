/*global module:false*/

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: 'grunt-talk',
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    jasmine : {
      src : 'src/**/*.js',
      options: {
        specs : 'spec/**/*Spec.js',
        helpers : 'spec/helpers/*.js'
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'jasmine']);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
