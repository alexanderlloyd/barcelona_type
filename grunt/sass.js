module.exports = {
   dist: {

         files: [{
           expand: true,
           cwd: 'scss',
           src: ['**/*.scss'],
           dest: 'stylesheets',
           ext: '.css'
         }]
   }
 }
