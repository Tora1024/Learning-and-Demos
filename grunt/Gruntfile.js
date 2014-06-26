module.exports = function(grunt) {
 
 // source example : http://danburzo.ro/grunt/chapters/handlebars/

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
        all: {
            files: {
                "js/templates.js": ["templates/**/*.hbs"]
            }
        }
    }
    
  });
   


  grunt.loadNpmTasks('grunt-contrib-handlebars');
 
  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};