/*global module:false*/

module.exports = function(grunt) {

  var path = require('path');
  var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

  var folderMount = function folderMount(connect, point) {
    return connect.static(path.resolve(point));
  };

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
    },
    watch: {
      test: {
        files: ['Gruntfile.js', "<%= grunt.config.data.jasmine.src %>",
                "<%= grunt.config.data.jasmine.options.specs %>"],
        tasks: ['jshint', 'jasmine']
      }
    },
    connect: {
      livereload: {
        options: {
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },
    // Configuration to be run (and then tested)
    regarde: {
      fred: {
        files: ['html/*.html', 'src/*.js', 'html/*.css'],
        tasks: ['livereload']
      }
    }
  });

  grunt.registerTask('whooo', ['livereload-start', 'connect', 'regarde']);
  grunt.registerTask('default', ['jshint', 'jasmine']);
  grunt.registerTask('release', ['jshint', 'clean', 'concat', 'uglify']);
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
