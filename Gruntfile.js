module.exports = function(grunt) {
    
    // Loading Grunt plugins and tasks
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);

    //Project and task configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      sass: {
          options: {
            implementation: sass,
            sourceMap: true,
            outputStyle: 'compressed'
          },
          dist: {
              files: {
                  'css/style.css' : 'src/scss/application.scss'
              }
          }
      },

      uglify: {
        my_target: {
          files: {
            'js/script.min.js' 
            : [
                'node_modules/jquery/dist/jquery.js',
                'node_modules/slick-carousel/slick/slick.js',
                'node_modules/lightbox2/dist/js/lightbox.js',
                'src/js/main.js'
              ]
          }
        }
      },

      watch: {
          sass: {
              files: [
                ['index.html', 'src/**/*.scss']
              ],
              tasks: [
                  ['sass']
              ]
          },
          scripts: {
              files: [
                'src/**/*.js'
              ],
              tasks: [
                 [ 'uglify']
              ]
          }        
      }

    });
  
    // Custom tasks
    grunt.registerTask('default', ['watch']);
  
  };