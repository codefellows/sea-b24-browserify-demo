'use strict';

module.exports = function(grunt) {
  var srcFiles = [
    '**/*.js',
    '!node_modules/**/*',
    '!bower_components/**/*',
    '!build/**/*',
    '!app/js/require.js'
  ];

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: srcFiles,
      options: {
        preset: 'google'
      }
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'js/**/*.js'],
        expand: true,
        dest: 'build/'
      },

      jquery: {
        cwd: 'bower_components/jquery/dist/',
        src: ['jquery.js'],
        expand: true,
        dest: 'build/js/'
      }
    },
  });

  grunt.registerTask('default', ['jshint', 'jscs', 'clean', 'copy']);
};
