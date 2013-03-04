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
    },
    concat: {
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/all.min.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/all.min.js': ['dist/all.min.js']
        }
      }
    },
    clean: {
      release: ['dist/**/*.js']
    }
  });

  grunt.registerTask('default', ['jshint', 'jasmine']);
  grunt.registerTask('release', ['jshint', 'clean', 'concat', 'uglify']);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
