"use strict";

module.exports = function (grunt) {
  var pkgJson = grunt.file.readJSON('package.json');
  var releasedir = "dist/";
  var banner = '/*!\n * name: '+ pkgJson.name +'\n * version: ' + pkgJson.version + '\n * build: <%= new Date() %>\n */\n\n';

  grunt.initConfig({
    pkg: pkgJson,
    concat: {
      css: {
        src: [
          '_css/uibase.css',
          '_css/toolbar.css',
          '_css/editor.css',
          '_css/menubutton.css',
          '_css/menu.css',
          '_css/combox.css',
          '_css/button.css',
          '_css/buttonicon.css',
          '_css/splitbutton.css',
          '_css/popup.css',
          '_css/message.css',
          '_css/dialog.css',
          '_css/paragraphpicker.css',
          '_css/tablepicker.css',
          '_css/colorpicker.css',
          '_css/autotypesetpicker.css',
          '_css/cellalignpicker.css',
          '_css/separtor.css',
          '_css/colorbutton.css',
          '_css/multiMenu.css',
          '_css/contextmenu.css',
          '_css/shortcutmenu.css',
          '_css/pastepicker.css'
        ],
        dest: releasedir + 'editorplus.css'
      }
    },
    cssmin: {
      options: {
        banner: banner
      },
      files: {
        expand: true,
        cwd: releasedir,
        src: ['*.css', '!*.min.css'],
        dest: releasedir,
        ext: '.min.css'
      }
    },
    copy: {
      base: {
        files: [
          {
            src: [
              'dialogbase.css',
              'images/**'
            ],
            dest: releasedir
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', 'build theme', function () {
    grunt.task.run([
      'concat',
      'cssmin',
      'copy:base'
    ]);
  });
};
