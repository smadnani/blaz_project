module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/landing.css' : 'assets/css/src/landing.scss',
          'assets/css/common.css' : 'assets/css/src/common.scss',
          'assets/css/download.css' : 'assets/css/src/download.scss',
          'assets/css/reviews.css' : 'assets/css/src/reviews.scss',
          'assets/css/demo.css' : 'assets/css/src/demo.scss'
        }
      }
    },

    watch: {
      css: {
        files: 'assets/css/src/*.scss',
        tasks: ['sass','cssmin']
      }
    },

    cssmin: {
      target: {
        files: {
          'assets/css/style.min.css':
          [
            'assets/css/common.css',
            'assets/css/landing.css',
            'assets/css/download.css',
            'assets/css/reviews.css',
            'assets/css/demo.css'
          ]
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass','cssmin','watch']);
};
